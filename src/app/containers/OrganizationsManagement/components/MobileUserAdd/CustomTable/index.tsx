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
import {
  Button,
  Card,
  Grid,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { useFetcher, useNavigate } from "react-router-dom";
function createData(
  status: string,
  fisrtName: string,
  lastName: string,
  paymentMethod: string,
  employeId: string,
  role: string,
  id: number,
  activeValue: boolean
) {
  return {
    status,
    fisrtName,
    lastName,
    paymentMethod,
    employeId,
    role,
    id,
    activeValue,
  };
}

type Props = {
  disable: boolean;
};

const rows = [
  {
    plateNumber: "14.888.65",
    manufacture: "Mazda",
    model: "CX-65",
    maintainence: "10.000",
    testDate: "12/12/22",
    insuranceDate: "12/12/23",
    id: 1,
  },
  {
    plateNumber: "14.888.65",
    manufacture: "Corola",
    model: "CX-65",
    maintainence: "20.000",
    testDate: "12/12/22",
    insuranceDate: "12/12/23",
    id: 2,
  },
  {
    plateNumber: "14.888.65",
    manufacture: "Alto",
    model: "CX-65",
    maintainence: "10.000",
    testDate: "12/12/22",
    insuranceDate: "12/12/23",
    id: 3,
  },
  {
    plateNumber: "14.888.65",
    manufacture: "FX",
    model: "CX-65",
    maintainence: "10.000",
    testDate: "12/12/22",
    insuranceDate: "12/12/23",
    id: 4,
  },
  {
    plateNumber: "14.888.65",
    manufacture: "Mazda",
    model: "CX-65",
    maintainence: "30.000",
    testDate: "12/12/22",
    insuranceDate: "12/12/23",
    id: 5,
  },
  {
    plateNumber: "14.888.65",
    manufacture: "Land Cruiser",
    model: "CX-65",
    maintainence: "10.000",
    testDate: "12/12/22",
    insuranceDate: "12/12/23",
    id: 6,
  },
];

export default function BasicTable(props: Props) {
  const styles = useStyles();
  const [opensend, setSend] = useState(false);
  const [deleteVal, setDeleteVal] = useState<any>({});
  const [data, setData] = useState<any>([]);
  const navigate = useNavigate();
  const getCurrentVal = (val) => {};
  const handleSendClose = () => {
    setSend(false);
  };
  useEffect(() => {
    setData(rows);
  }, []);
  const handleSend = (value) => {
    setSend(true);
    setDeleteVal(value);
  };
  const deleteRow = () => {
    const deleteValue = data.filter((v) => v.id !== deleteVal.id);
    console.log("value", deleteValue);
    setData(deleteValue);
    setSend(false);
  };
  return (
    <>
      <TableContainer component={Paper} className={styles.container}>
        <Table
          sx={{ minWidth: 650 }}
          aria-label="simple table"
          className={styles.table}
        >
          <TableHead sx={{ background: "#F4F8FF" }}>
            <TableRow>
              <TableCell
                sx={{
                  fontFamily: "Open Sans",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "22px",
                  paddingTop: "25px",
                }}
              >
                Action
              </TableCell>

              <TableCell
                sx={{
                  fontFamily: "Open Sans",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "22px",
                  paddingTop: "25px",
                }}
              >
                Plate Number
              </TableCell>

              <TableCell
                sx={{
                  fontFamily: "Open Sans",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "22px",
                  paddingTop: "25px",
                }}
              >
                Manufacture
              </TableCell>

              <TableCell
                sx={{
                  fontFamily: "Open Sans",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "22px",
                  paddingTop: "25px",
                }}
              >
                Model
              </TableCell>

              <TableCell
                sx={{
                  fontFamily: "Open Sans",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "22px",
                  paddingTop: "25px",
                }}
              >
                Maintenance KM Intervals
              </TableCell>

              <TableCell
                sx={{
                  fontFamily: "Open Sans",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "22px",
                  paddingTop: "25px",
                }}
              >
                Test Date
              </TableCell>

              <TableCell
                sx={{
                  fontFamily: "Open Sans",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "22px",
                  paddingTop: "25px",
                }}
              >
                Insurance Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={styles.tableBody}>
            {data.map((value, i) => {
              return (
                <TableRow
                  key={i}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="td" scope="row">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <IconButton
                        disabled={props.disable}
                        onClick={() => handleSend(value)}
                      >
                        <DeleteIcon
                          sx={{
                            color: "#D7514A",
                          }}
                        />
                      </IconButton>
                    </Box>
                  </TableCell>
                  <TableCell align="left">{value.plateNumber}</TableCell>
                  <TableCell align="left">{value.manufacture}</TableCell>
                  <TableCell align="left"> {value.model}</TableCell>
                  <TableCell align="left"> {value.maintainence}</TableCell>
                  <TableCell align="left"> {value.testDate}</TableCell>
                  <TableCell align="left">{value.insuranceDate}</TableCell>
                </TableRow>
              );
            })}
            {/* <TableRow
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
            }}
          >
            <TableCell component="td" scope="row">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </TableCell>
            <TableCell align="left">14-888-65</TableCell>
            <TableCell align="left">Mazda</TableCell>
            <TableCell align="left"> CX-5</TableCell>
            <TableCell align="left"> 20,000</TableCell>
            <TableCell align="left"> 12/12/22</TableCell>
            <TableCell align="left"> 12/12/23</TableCell>
          </TableRow>
          <TableRow
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
            }}
          >
            <TableCell component="td" scope="row">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </TableCell>
            <TableCell align="left">14-888-65</TableCell>
            <TableCell align="left">Mazda</TableCell>
            <TableCell align="left"> CX-5</TableCell>
            <TableCell align="left"> 10.000</TableCell>
            <TableCell align="left"> 12/12/22</TableCell>
            <TableCell align="left"> 12/12/23</TableCell>
          </TableRow>
          <TableRow
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
            }}
          >
            <TableCell component="td" scope="row">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </TableCell>
            <TableCell align="left">14-888-65</TableCell>
            <TableCell align="left">Mazda</TableCell>
            <TableCell align="left"> CX-5</TableCell>
            <TableCell align="left"> 10.000</TableCell>
            <TableCell align="left"> 12/12/22</TableCell>
            <TableCell align="left"> 12/12/23</TableCell>
          </TableRow>
          <TableRow
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
            }}
          >
            <TableCell component="td" scope="row">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </TableCell>
            <TableCell align="left">14-888-65</TableCell>
            <TableCell align="left">Mazda</TableCell>
            <TableCell align="left"> CX-5</TableCell>
            <TableCell align="left"> 20,000</TableCell>
            <TableCell align="left"> 12/12/22</TableCell>
            <TableCell align="left"> 12/12/23</TableCell>
          </TableRow>
          <TableRow
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
            }}
          >
            <TableCell component="td" scope="row">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </TableCell>
            <TableCell align="left">14-888-65</TableCell>
            <TableCell align="left">Mazda</TableCell>
            <TableCell align="left"> CX-5</TableCell>
            <TableCell align="left"> 10.000</TableCell>
            <TableCell align="left"> 12/12/22</TableCell>
            <TableCell align="left"> 12/12/23</TableCell>
          </TableRow> */}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={opensend}
        onClose={handleSendClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card className={styles.messageModal}>
          <div className={styles.modalContainer}>
            <p className={styles.modalText}>
              Do you want to delete the vehicle {deleteVal.manufacture}{" "}
              {deleteVal.plateNumber}?
            </p>

            <div>
              <Grid container spacing={3} mt={2}>
                <Grid
                  className={styles.btnContainer}
                  container
                  item
                  xs={6}
                  direction="column"
                >
                  <Button
                    className={styles.cancelBtn}
                    variant="outlined"
                    onClick={handleSendClose}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid container item xs={6} direction="column">
                  <Button
                    className={styles.saveBtn}
                    variant="contained"
                    onClick={deleteRow}
                  >
                    Delete
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </Card>
      </Modal>
    </>
  );
}
