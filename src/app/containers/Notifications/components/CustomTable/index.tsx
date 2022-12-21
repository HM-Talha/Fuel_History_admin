import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useStyles } from "./styles";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import CustomSwitch from "../CustomSwitch/index";
// import { IconButton } from "@mui/material";
// import imgEdit from "../../assets/Edit.png";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { useFetcher, useLocation, useNavigate } from "react-router-dom";
function createData(
  status: string,
  firstName: string,
  lastName: string,
  paymentMethod: string,
  employeId: string,
  role: string,
  id: number,
  activeValue: boolean
) {
  return {
    status,
    firstName,
    lastName,
    paymentMethod,
    employeId,
    role,
    id,
    activeValue,
  };
}

const rows = [
  {
    date: "15/09/2022 08:00",
    month: "Marcg",
    vehicleId: "22-555-333",
    currentKm: "10,000",
    fuelType: "98",
    liters: "85.20",
    discountNs: "60,28",
    pricePerLtr: "130",
    totalPrice: "3140",
    StationName: "Station 2",
    gasCompany: "Gas Company 1",
    dealerName: "Sonol",
    idNumber: "11223355",
    phoneNumber: "+72 755 666",
    paymetMethod: "Credit Card",
    id: 11,
    //   statusVal: activeValue,
  },
  {
    date: "15/09/2022 08:00",
    month: "Marcg",
    vehicleId: "22-555-333",
    currentKm: "10,000",
    fuelType: "98",
    liters: "85.20",
    discountNs: "60,28",
    pricePerLtr: "130",
    totalPrice: "3140",
    StationName: "Station 3",
    gasCompany: "Gas Company 1",
    dealerName: "Sonol",
    idNumber: "11223355",
    phoneNumber: "+72 755 666",
    paymetMethod: "Salary",
    id: 12,
  },
  {
    date: "15/09/2022 08:00",
    month: "Marcg",
    vehicleId: "22-555-333",
    currentKm: "10,000",
    fuelType: "95",
    liters: "85.20",
    discountNs: "60,28",
    pricePerLtr: "130",
    totalPrice: "3140",
    StationName: "Station 1",
    gasCompany: "Gas Company 1",
    dealerName: "Sonol",
    idNumber: "11223355",
    phoneNumber: "+72 755 666",
    paymetMethod: "Credit Card",
    id: 13,
  },
  {
    date: "17/09/2022 08:00",
    month: "Marcg",
    vehicleId: "22-555-333",
    currentKm: "10,000",
    fuelType: "98",
    liters: "85.20",
    discountNs: "60,28",
    pricePerLtr: "130",
    totalPrice: "3140",
    StationName: "Station 1",
    gasCompany: "Gas Company 1",
    dealerName: "Sonol",
    idNumber: "11223355",
    phoneNumber: "+72 755 666",
    paymetMethod: "Credit Card",
    id: 14,
  },
  {
    date: "15/09/2022 08:00",
    month: "Marcg",
    vehicleId: "22-555-333",
    currentKm: "10,000",
    fuelType: "98",
    liters: "85.20",
    discountNs: "60,28",
    pricePerLtr: "130",
    totalPrice: "3140",
    StationName: "Station 2",
    gasCompany: "Gas Company 1",
    dealerName: "Sonol",
    idNumber: "11223355",
    phoneNumber: "+72 755 666",
    paymetMethod: "Salary",
    id: 15,
  },
  {
    date: "15/09/2022 08:00",
    month: "Marcg",
    vehicleId: "22-555-333",
    currentKm: "10,000",
    fuelType: "95",
    liters: "85.20",
    discountNs: "60,28",
    pricePerLtr: "130",
    totalPrice: "3140",
    StationName: "Station 4",
    gasCompany: "Gas Company 1",
    dealerName: "Sonol",
    idNumber: "11223355",
    phoneNumber: "+72 755 666",
    paymetMethod: "Salary",
    id: 16,
  },
  {
    date: "15/09/2022 08:00",
    month: "Marcg",
    vehicleId: "22-555-333",
    currentKm: "10,000",
    fuelType: "98",
    liters: "85.20",
    discountNs: "60,28",
    pricePerLtr: "130",
    totalPrice: "3140",
    StationName: "Station 1",
    gasCompany: "Gas Company 1",
    dealerName: "Sonol",
    idNumber: "11223355",
    phoneNumber: "+72 755 666",
    paymetMethod: "Credit Card",
    id: 17,
  },
  {
    date: "17/09/2022 08:00",
    month: "Marcg",
    vehicleId: "22-555-333",
    currentKm: "10,000",
    fuelType: "95",
    liters: "85.20",
    discountNs: "60,28",
    pricePerLtr: "130",
    totalPrice: "3140",
    StationName: "Station 3",
    gasCompany: "Gas Company 1",
    dealerName: "Sonol",
    idNumber: "11223355",
    phoneNumber: "+72 755 666",
    paymetMethod: "Salary",
    id: 18,
  },
  {
    date: "15/09/2022 08:00",
    month: "Marcg",
    vehicleId: "22-555-333",
    currentKm: "10,000",
    fuelType: "98",
    liters: "85.20",
    discountNs: "60,28",
    pricePerLtr: "130",
    totalPrice: "3140",
    StationName: "Station 1",
    gasCompany: "Gas Company 1",
    dealerName: "Sonol",
    idNumber: "11223355",
    phoneNumber: "+72 755 666",
    paymetMethod: "Credit Card",
    id: 19,
  },
  {
    date: "17/09/2022 08:00",
    month: "Marcg",
    vehicleId: "22-555-333",
    currentKm: "10,000",
    fuelType: "95",
    liters: "85.20",
    discountNs: "60,28",
    pricePerLtr: "130",
    totalPrice: "3140",
    StationName: "Station 2",
    gasCompany: "Gas Company 1",
    dealerName: "Sonol",
    idNumber: "11223355",
    phoneNumber: "+72 755 666",
    paymetMethod: "Salary",
    id: 10,
  },
];

type Props = {
  dropDownVal1: string;
  dropDownValue: string;
  dropDownValue2: string;
  dateTo: any;
  dateFrom: any;
};

export default function BasicTable(props: Props) {
  const styles = useStyles();
  const navigate = useNavigate();
  const [activeValue1, setActiveValue1] = useState<any>(true);
  const [data, setData] = useState<any>([
    {
      date: "15/09/2022 08:00",
      month: "Marcg",
      vehicleId: "22-555-333",
      currentKm: "10,000",
      fuelType: "98",
      liters: "85.20",
      discountNs: "60,28",
      pricePerLtr: "130",
      totalPrice: "3140",
      StationName: "Station 2",
      gasCompany: "Gas Company 1",
      dealerName: "Sonol",
      idNumber: "11223355",
      phoneNumber: "+72 755 666",
      paymetMethod: "Credit Card",
      id: 11,
      //   statusVal: activeValue,
    },
    {
      date: "15/09/2022 08:00",
      month: "Marcg",
      vehicleId: "22-555-333",
      currentKm: "10,000",
      fuelType: "98",
      liters: "85.20",
      discountNs: "60,28",
      pricePerLtr: "130",
      totalPrice: "3140",
      StationName: "Station 3",
      gasCompany: "Gas Company 1",
      dealerName: "Sonol",
      idNumber: "11223355",
      phoneNumber: "+72 755 666",
      paymetMethod: "Salary",
      id: 12,
    },
    {
      date: "15/09/2022 08:00",
      month: "Marcg",
      vehicleId: "22-555-333",
      currentKm: "10,000",
      fuelType: "95",
      liters: "85.20",
      discountNs: "60,28",
      pricePerLtr: "130",
      totalPrice: "3140",
      StationName: "Station 1",
      gasCompany: "Gas Company 1",
      dealerName: "Sonol",
      idNumber: "11223355",
      phoneNumber: "+72 755 666",
      paymetMethod: "Credit Card",
      id: 13,
    },
    {
      date: "17/09/2022 08:00",
      month: "Marcg",
      vehicleId: "22-555-333",
      currentKm: "10,000",
      fuelType: "98",
      liters: "85.20",
      discountNs: "60,28",
      pricePerLtr: "130",
      totalPrice: "3140",
      StationName: "Station 1",
      gasCompany: "Gas Company 1",
      dealerName: "Sonol",
      idNumber: "11223355",
      phoneNumber: "+72 755 666",
      paymetMethod: "Credit Card",
      id: 14,
    },
    {
      date: "15/09/2022 08:00",
      month: "Marcg",
      vehicleId: "22-555-333",
      currentKm: "10,000",
      fuelType: "98",
      liters: "85.20",
      discountNs: "60,28",
      pricePerLtr: "130",
      totalPrice: "3140",
      StationName: "Station 2",
      gasCompany: "Gas Company 1",
      dealerName: "Sonol",
      idNumber: "11223355",
      phoneNumber: "+72 755 666",
      paymetMethod: "Salary",
      id: 15,
    },
    {
      date: "15/09/2022 08:00",
      month: "Marcg",
      vehicleId: "22-555-333",
      currentKm: "10,000",
      fuelType: "95",
      liters: "85.20",
      discountNs: "60,28",
      pricePerLtr: "130",
      totalPrice: "3140",
      StationName: "Station 4",
      gasCompany: "Gas Company 1",
      dealerName: "Sonol",
      idNumber: "11223355",
      phoneNumber: "+72 755 666",
      paymetMethod: "Salary",
      id: 16,
    },
    {
      date: "15/09/2022 08:00",
      month: "Marcg",
      vehicleId: "22-555-333",
      currentKm: "10,000",
      fuelType: "98",
      liters: "85.20",
      discountNs: "60,28",
      pricePerLtr: "130",
      totalPrice: "3140",
      StationName: "Station 1",
      gasCompany: "Gas Company 1",
      dealerName: "Sonol",
      idNumber: "11223355",
      phoneNumber: "+72 755 666",
      paymetMethod: "Credit Card",
      id: 17,
    },
    {
      date: "17/09/2022 08:00",
      month: "Marcg",
      vehicleId: "22-555-333",
      currentKm: "10,000",
      fuelType: "95",
      liters: "85.20",
      discountNs: "60,28",
      pricePerLtr: "130",
      totalPrice: "3140",
      StationName: "Station 3",
      gasCompany: "Gas Company 1",
      dealerName: "Sonol",
      idNumber: "11223355",
      phoneNumber: "+72 755 666",
      paymetMethod: "Salary",
      id: 18,
    },
    {
      date: "15/09/2022 08:00",
      month: "Marcg",
      vehicleId: "22-555-333",
      currentKm: "10,000",
      fuelType: "98",
      liters: "85.20",
      discountNs: "60,28",
      pricePerLtr: "130",
      totalPrice: "3140",
      StationName: "Station 1",
      gasCompany: "Gas Company 1",
      dealerName: "Sonol",
      idNumber: "11223355",
      phoneNumber: "+72 755 666",
      paymetMethod: "Credit Card",
      id: 19,
    },
    {
      date: "17/09/2022 08:00",
      month: "Marcg",
      vehicleId: "22-555-333",
      currentKm: "10,000",
      fuelType: "95",
      liters: "85.20",
      discountNs: "60,28",
      pricePerLtr: "130",
      totalPrice: "3140",
      StationName: "Station 2",
      gasCompany: "Gas Company 1",
      dealerName: "Sonol",
      idNumber: "11223355",
      phoneNumber: "+72 755 666",
      paymetMethod: "Salary",
      id: 10,
    },
  ]);
  const [isEdit, setIsEdit] = useState<Boolean>(false);
  const [id, setId] = useState<any>();
  const { state } = useLocation();
  const Location = useLocation();
  const [indexNum, setIndexNum] = useState<any>("");
  console.log("date To", rows[0].date.slice(0, 2));
  // console.log("date From", props.dateFrom.$D);

  useEffect(() => {
    let flag = true;
    setData([]);
    rows.forEach((element) => {
      if (element.fuelType.toLowerCase() === props.dropDownVal1.toLowerCase()) {
        setData((old) => [...old, element]);
        flag = false;
      }
    });
    if (flag) {
      setData(rows);
    }
  }, [props.dropDownVal1]);

  useEffect(() => {
    let flag = true;
    setData([]);
    rows.forEach((element) => {
      if (
        element.paymetMethod.toLowerCase() === props.dropDownValue.toLowerCase()
      ) {
        setData((old) => [...old, element]);
        flag = false;
      }
    });
    if (flag) {
      setData(rows);
    }
  }, [props.dropDownValue]);

  useEffect(() => {
    let flag = true;
    setData([]);
    rows.forEach((element) => {
      if (
        element.StationName.toLowerCase() === props.dropDownValue2.toLowerCase()
      ) {
        setData((old) => [...old, element]);
        flag = false;
      }
    });
    if (flag) {
      setData(rows);
    }
  }, [props.dropDownValue2]);

  useEffect(() => {
    let flag = true;
    setData([]);
    rows.forEach((elem) => {
      if (Number(elem?.date?.slice(0, 2)) == props?.dateTo?.$D) {
        console.log(elem);
        setData((old) => [...old, elem]);
        flag = false;
      }
    });
    if (flag) {
      setData(rows);
    }
  }, [props.dateTo]);
  useEffect(() => {
    setData(data);
  }, [data]);
  return (
    <TableContainer
      sx={{ border: "1px solid red" }}
      component={Paper}
      className={styles.container}
    >
      <Table className={styles.table}>
        <TableHead sx={{ background: "#F4F8FF" }}>
          <TableRow>
            <TableCell
              sx={{
                fontFamily: "Open Sans",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "22px",
                paddingTop: "30px",
                minWidth: "180px",
              }}
            >
              Date & Time
              <ArrowDownwardIcon
                style={{
                  marginLeft: "5px",
                }}
              />
            </TableCell>
            <TableCell
              sx={{
                fontFamily: "Open Sans",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "22px",
                paddingTop: "30px",
                minWidth: "180px",
              }}
            >
              Month
              <ArrowDownwardIcon
                style={{
                  marginLeft: "5px",
                }}
              />
            </TableCell>
            <TableCell
              sx={{
                fontFamily: "Open Sans",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "22px",
                paddingTop: "30px",
                minWidth: "180px",
              }}
            >
              Vehicle ID
              <ArrowDownwardIcon
                style={{
                  marginLeft: "5px",
                }}
              />
            </TableCell>

            <TableCell
              sx={{
                fontFamily: "Open Sans",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "22px",
                paddingTop: "30px",
                minWidth: "180px",
              }}
            >
              Current KM
              <ArrowDownwardIcon
                style={{
                  marginLeft: "5px",
                }}
              />
            </TableCell>

            <TableCell
              sx={{
                fontFamily: "Open Sans",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "22px",
                paddingTop: "30px",
                minWidth: "180px",
              }}
            >
              Fuel Type
              <ArrowDownwardIcon
                style={{
                  marginLeft: "5px",
                }}
              />
            </TableCell>

            <TableCell
              sx={{
                fontFamily: "Open Sans",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "22px",
                paddingTop: "30px",
                minWidth: "180px",
              }}
            >
              Liters
              <ArrowDownwardIcon
                style={{
                  marginLeft: "5px",
                }}
              />
            </TableCell>

            <TableCell
              sx={{
                fontFamily: "Open Sans",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "22px",
                paddingTop: "30px",
                minWidth: "180px",
              }}
            >
              Discount (NIS)
              <ArrowDownwardIcon
                style={{
                  marginLeft: "5px",
                }}
              />
            </TableCell>
            <TableCell
              sx={{
                fontFamily: "Open Sans",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "22px",
                paddingTop: "30px",
                minWidth: "180px",
              }}
            >
              Price Per Litre
              <ArrowDownwardIcon
                style={{
                  marginLeft: "5px",
                }}
              />
            </TableCell>

            <TableCell
              sx={{
                fontFamily: "Open Sans",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "22px",
                paddingTop: "30px",
                minWidth: "180px",
              }}
            >
              Total Price (NIS)
              <ArrowDownwardIcon
                style={{
                  marginLeft: "5px",
                }}
              />
            </TableCell>
            <TableCell
              sx={{
                fontFamily: "Open Sans",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "22px",
                paddingTop: "30px",
                minWidth: "180px",
              }}
            >
              Station Name
              <ArrowDownwardIcon
                style={{
                  marginLeft: "5px",
                }}
              />
            </TableCell>
            <TableCell
              sx={{
                fontFamily: "Open Sans",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "22px",
                paddingTop: "30px",
                minWidth: "200px",
              }}
            >
              Gas Company name
              <ArrowDownwardIcon
                style={{
                  marginLeft: "5px",
                }}
              />
            </TableCell>
            <TableCell
              sx={{
                fontFamily: "Open Sans",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "22px",
                paddingTop: "30px",
                minWidth: "180px",
              }}
            >
              Dealer name
              <ArrowDownwardIcon
                style={{
                  marginLeft: "5px",
                }}
              />
            </TableCell>
            <TableCell
              sx={{
                fontFamily: "Open Sans",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "22px",
                paddingTop: "30px",
                minWidth: "180px",
              }}
            >
              ID Number
              <ArrowDownwardIcon
                style={{
                  marginLeft: "5px",
                }}
              />
            </TableCell>
            <TableCell
              sx={{
                fontFamily: "Open Sans",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "22px",
                paddingTop: "30px",
                minWidth: "180px",
              }}
            >
              Phone Number
              <ArrowDownwardIcon
                style={{
                  marginLeft: "5px",
                }}
              />
            </TableCell>
            <TableCell
              sx={{
                fontFamily: "Open Sans",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "22px",
                paddingTop: "30px",
                minWidth: "180px",
              }}
            >
              Payment Method
              <ArrowDownwardIcon
                style={{
                  marginLeft: "5px",
                }}
              />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={styles.tableBody}>
          {data.map((v, i) => {
            return (
              <TableRow
                key={i}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell align="left" sx={{}}>
                  {v.date}
                </TableCell>
                <TableCell align="left" sx={{}}>
                  {v.month}
                </TableCell>
                <TableCell align="left" sx={{}}>
                  {" "}
                  {v.vehicleId}
                </TableCell>
                <TableCell align="left" sx={{}}>
                  {" "}
                  {v.currentKm}
                </TableCell>
                <TableCell align="left" sx={{}}>
                  {" "}
                  {v.fuelType}
                </TableCell>
                <TableCell align="left" sx={{}}>
                  {" "}
                  {v.liters}
                </TableCell>
                <TableCell align="left" sx={{}}>
                  {" "}
                  {v.discountNs}
                </TableCell>
                <TableCell align="left" sx={{}}>
                  {" "}
                  {v.pricePerLtr}
                </TableCell>
                <TableCell align="left" sx={{}}>
                  {" "}
                  {v.totalPrice}
                </TableCell>
                <TableCell align="left" sx={{}}>
                  {" "}
                  {v.StationName}
                </TableCell>
                <TableCell align="left" sx={{}}>
                  {" "}
                  {v.gasCompany}
                </TableCell>
                <TableCell align="left" sx={{}}>
                  {" "}
                  {v.dealerName}
                </TableCell>
                <TableCell align="left" sx={{}}>
                  {" "}
                  {v.idNumber}
                </TableCell>
                <TableCell align="left" sx={{}}>
                  {" "}
                  {v.phoneNumber}
                </TableCell>
                <TableCell align="left" sx={{}}>
                  {" "}
                  {v.paymetMethod}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
