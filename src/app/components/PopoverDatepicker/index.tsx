import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import Badge from "@mui/material/Badge";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { CalendarPickerSkeleton } from "@mui/x-date-pickers/CalendarPickerSkeleton";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { createStyles, makeStyles } from "@mui/material";
import { useEffect } from "react";
function getRandomNumber(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

function fakeFetch(date: Dayjs, { signal }: { signal: AbortSignal }) {
  return new Promise<{ daysToHighlight: number[] }>((resolve, reject) => {
    const timeout = setTimeout(() => {
      const daysInMonth = date.daysInMonth();
      const daysToHighlight = [1, 2, 3].map(() =>
        getRandomNumber(1, daysInMonth)
      );

      resolve({ daysToHighlight });
    }, 500);

    signal.onabort = () => {
      clearTimeout(timeout);
      reject(new DOMException("aborted", "AbortError"));
    };
  });
}

const initialValue = dayjs("2022-04-07");
type Props = {
  getVal: Function;
};

export default function ServerRequestDatePicker(props: Props) {
  const requestAbortController = React.useRef<AbortController | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);
  const [value, setValue] = React.useState<Dayjs | null>(initialValue);
  useEffect(() => {
    props.getVal(value);
  });

  const fetchHighlightedDays = (date: Dayjs) => {
    const controller = new AbortController();
    fakeFetch(date, {
      signal: controller.signal,
    })
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight);
        setIsLoading(false);
      })
      .catch((error) => {
        // ignore the error if it's caused by `controller.abort`
        if (error.name !== "AbortError") {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  React.useEffect(() => {
    fetchHighlightedDays(initialValue);
    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date: Dayjs) => {
    if (requestAbortController.current) {
      // make sure that you are aborting useless requests
      // because it is possible to switch between months pretty quickly
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={value}
        loading={isLoading}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        inputFormat="DD-MM-YYYY"
        onMonthChange={handleMonthChange}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              border: "1px solid #E2E7EB",
              background: "#fff",
            }}
          />
        )}
        renderLoading={() => <CalendarPickerSkeleton />}
        components={{
          OpenPickerIcon: CalendarTodayOutlinedIcon,
        }}
        renderDay={(day, _value, DayComponentProps) => {
          const isSelected =
            !DayComponentProps.outsideCurrentMonth &&
            highlightedDays.indexOf(day.date()) > 0;

          return (
            <Badge
              key={day.toString()}
              overlap="circular"
              badgeContent={isSelected ? "" : undefined}
            >
              <PickersDay {...DayComponentProps} />
            </Badge>
          );
        }}
      />
    </LocalizationProvider>
  );
}
