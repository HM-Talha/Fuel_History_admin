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
import CustomSwitch from "../CustomSwitch/index";
import { Button, IconButton, Snackbar } from "@mui/material";
import imgEdit from "../../assets/Edit.png";
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

type Props = {
  dropDownValue: string;
  setActiveVal: any;
};

export default function BasicTable(props: Props) {
  const styles = useStyles();
  const navigate = useNavigate();
  const [activeValue1, setActiveValue1] = useState<any>(true);
  const [data, setData] = useState<any>([
    {
      status: "Active",
      firstName: "Alexander",
      lastName: "Eyal",
      paymentMethod: "Credit Card",
      employeId: "987654321",
      role: "Role",
      id: 11,
      email: "abc@gmail.com",
      number: "090078601",
      //   statusVal: activeValue,
    },
    {
      status: "Active",
      firstName: "Alexander",
      lastName: "Eyal",
      paymentMethod: "Credit Card",
      employeId: "987654321",
      role: "Role",
      id: 12,
      email: "abc@gmail.com",
      number: "090078601",
      //   statusVal: activeValue,
    },
    {
      status: "Active",
      firstName: "Alexander",
      lastName: "Eyal",
      paymentMethod: "Salary",
      employeId: "987654321",
      role: "Role",
      id: 13,
      email: "abc@gmail.com",
      number: "090078601",
      //   statusVal: activeValue,
    },
    {
      status: "Active",
      firstName: "Alexander",
      lastName: "Eyal",
      paymentMethod: "Salary",
      employeId: "987654321",
      role: "Role",
      id: 14,
      email: "abc@gmail.com",
      number: "090078601",
      //   statusVal: activeValue,
    },
    {
      status: "Active",
      firstName: "Alexander",
      lastName: "Eyal",
      paymentMethod: "Credit Card",
      employeId: "987654321",
      role: "Role",
      id: 15,
      email: "abc@gmail.com",
      number: "090078601",
      //   statusVal: activeValue,
    },
    {
      status: "Active",
      firstName: "Alexander",
      lastName: "Eyal",
      paymentMethod: "Salary",
      employeId: "987654321",
      role: "Role",
      id: 16,
      email: "abc@gmail.com",
      number: "090078601",
      //   statusVal: activeValue,
    },
    {
      status: "Active",
      firstName: "Alexander",
      lastName: "Eyal",
      paymentMethod: "Salary",
      employeId: "987654321",
      role: "Role",
      id: 17,
      email: "abc@gmail.com",
      number: "090078601",
      //   statusVal: activeValue,
    },
    {
      status: "Active",
      firstName: "Alexander",
      lastName: "Eyal",
      paymentMethod: "Salary",
      employeId: "987654321",
      role: "Role",
      id: 18,
      email: "abc@gmail.com",
      number: "090078601",
      //   statusVal: activeValue,
    },
    {
      status: "Active",
      firstName: "Alexander",
      lastName: "Eyal",
      paymentMethod: "Salary",
      employeId: "987654321",
      role: "Role",
      id: 19,
      email: "abc@gmail.com",
      number: "090078601",
      //   statusVal: activeValue,
    },
    {
      status: "Active",
      firstName: "Alexander",
      lastName: "Eyal",
      paymentMethod: "Credit Card",
      employeId: "987654321",
      role: "Role",
      id: 10,
      email: "abc@gmail.com",
      number: "090078601",
      //   statusVal: activeValue,
    },
  ]);
  const [isEdit, setIsEdit] = useState<Boolean>(false);
  const [open, setOpen] = React.useState(false);
  const [openAdd, setOpenAdd] = React.useState(false);
  const [id, setId] = useState<any>();
  const { state } = useLocation();
  const Location = useLocation();
  const [indexNum, setIndexNum] = useState<any>("");
  // console.log("activeValue", state);
  // console.log("Location", Location);
  let rows = [
    {
      status: "Active",
      firstName: "Alexander",
      lastName: "Eyal",
      paymentMethod: "Credit Card",
      employeId: "987654321",
      role: "Role",
      id: 11,
      email: "abc@gmail.com",
      number: "090078601",
      //   statusVal: activeValue,
    },
    {
      status: "Active",
      firstName: "Alexander",
      lastName: "Eyal",
      paymentMethod: "Credit Card",
      employeId: "987654321",
      role: "Role",
      id: 12,
      email: "abc@gmail.com",
      number: "090078601",
      //   statusVal: activeValue,
    },
    {
      status: "Active",
      firstName: "Alexander",
      lastName: "Eyal",
      paymentMethod: "Salary",
      employeId: "987654321",
      role: "Role",
      id: 13,
      email: "abc@gmail.com",
      number: "090078601",
      //   statusVal: activeValue,
    },
    {
      status: "Active",
      firstName: "Alexander",
      lastName: "Eyal",
      paymentMethod: "Salary",
      employeId: "987654321",
      role: "Role",
      id: 14,
      email: "abc@gmail.com",
      number: "090078601",
      //   statusVal: activeValue,
    },
    {
      status: "Active",
      firstName: "Alexander",
      lastName: "Eyal",
      paymentMethod: "Credit Card",
      employeId: "987654321",
      role: "Role",
      id: 15,
      email: "abc@gmail.com",
      number: "090078601",
      //   statusVal: activeValue,
    },
    {
      status: "Active",
      firstName: "Alexander",
      lastName: "Eyal",
      paymentMethod: "Salary",
      employeId: "987654321",
      role: "Role",
      id: 16,
      email: "abc@gmail.com",
      number: "090078601",
      //   statusVal: activeValue,
    },
    {
      status: "Active",
      firstName: "Alexander",
      lastName: "Eyal",
      paymentMethod: "Salary",
      employeId: "987654321",
      role: "Role",
      id: 17,
      email: "abc@gmail.com",
      number: "090078601",
      //   statusVal: activeValue,
    },
    {
      status: "Active",
      firstName: "Alexander",
      lastName: "Eyal",
      paymentMethod: "Salary",
      employeId: "987654321",
      role: "Role",
      id: 18,
      email: "abc@gmail.com",
      number: "090078601",
      //   statusVal: activeValue,
    },
    {
      status: "Active",
      firstName: "Alexander",
      lastName: "Eyal",
      paymentMethod: "Salary",
      employeId: "987654321",
      role: "Role",
      id: 19,
      email: "abc@gmail.com",
      number: "090078601",
      //   statusVal: activeValue,
    },
    {
      status: "Active",
      firstName: "Alexander",
      lastName: "Eyal",
      paymentMethod: "Credit Card",
      employeId: "987654321",
      role: "Role",
      id: 10,
      email: "abc@gmail.com",
      number: "090078601",
      //   statusVal: activeValue,
    },
  ];
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    // setOpenRemoveModal(null);
    setOpen(false);
  };
  const handleCloseAdd = () => {
    // setOpenRemoveModal(null);
    setOpenAdd(false);
  };
  useEffect(() => {
    setData([]);
    console.log("props.dropDownValue", props.dropDownValue);
    let flag = true;
    rows.forEach((v) => {
      if (v.paymentMethod.toUpperCase() === props.dropDownValue.toUpperCase()) {
        setData((old) => [...old, v]);
        flag = false;
      }
    });
    if (flag) {
      setData(rows);
    }
  }, [props.dropDownValue]);

  useEffect(() => {
    setData(data);
    setIsEdit(true);
  }, []);

  useEffect(() => {
    // console.log("data", data && data);
    let flag = true;
    let data2 = data.forEach((v, i) => {
      if (v?.id === state?.id) {
        data?.splice(i, 1, state);
        // setData([...data]);
        handleClick();
        flag = false;
      }
    });
    if (flag) {
      state && data.unshift(state);
      setData([...data]);
      setOpenAdd(true);
      setOpen(false);
    }
  }, [isEdit]);
  useEffect(() => {
    setTimeout(() => {
      handleClose();
      handleCloseAdd();
    }, 5000);
  });

  const handleDoubleClick = (value) => {
    navigate("mobile-users-details?mode=view", { state: value });
  };
  const handleEdit = (value) => {
    navigate("mobile-users-details?mode=edit", { state: value });
    setIsEdit(value);
  };

  useEffect(() => {
    props.setActiveVal(activeValue1);
  }, [activeValue1]);

  const getCurrentVal = (val, i) => {
    console.log("valaa", val);
    data.forEach((element) => {
      if (element?.id == val?.id) {
        data?.splice(i, 1, {
          ...data[i],
          status: activeValue1 ? "Inactive" : "Active",
        });
        console.log("valaa condition", element);
      }
    });
  };
  return (
    <>
      <TableContainer component={Paper} className={styles.container}>
        <Table
          sx={{ minWidth: 650 }}
          aria-label="simple table"
          className={styles.table}
        >
          <TableHead
            sx={{
              // background: "#F4F8FF",
              position: "relative !important",
              // top: "0px",
              width: "100%",
              zIndex: 222,
            }}
          >
            <TableRow
              sx={{
                position: "fixed ",
                background: "#F4F8FF",
                zIndex: 222,
                width: props.dropDownValue === 'Choose Payment Method' ? "77.4%" : "78.1%",
                border: "1px solid lightgray",
                borderBottom: "none",
                height: "80px",
              }}
            >
              <TableCell
                sx={{
                  fontFamily: "Open Sans",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "22px",
                  paddingTop: "30px",
                  width: "19.2% !important",
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
                  paddingTop: "30px",
                  width: "11% !important",
                }}
              >
                Status
              </TableCell>

              <TableCell
                sx={{
                  fontFamily: "Open Sans",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "22px",
                  paddingTop: "30px",
                  width: "15.3% !important",
                }}
              >
                First Name
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
                }}
              >
                Last Name
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
                }}
              >
                Payment Method
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
                }}
              >
                Employee ID Number
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
                  width: "10%",
                }}
              >
                Role
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
                  onDoubleClick={() => handleDoubleClick(v)}
                >
                  <TableCell component="td" scope="row">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <IconButton onClick={() => getCurrentVal(v, i)}>
                        <CustomSwitch onChange={setActiveValue1} />
                      </IconButton>

                      <IconButton>
                        <img
                          onClick={() => {
                            handleEdit(v);
                            setIndexNum(i);
                          }}
                          height="18px"
                          src={imgEdit}
                          style={{
                            marginLeft: "10px",
                          }}
                        ></img>
                      </IconButton>
                    </Box>
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{
                      width: "140px",
                    }}
                  >
                    {v.status}
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{
                      width: "200px",
                    }}
                  >
                    {v.firstName}
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{
                      width: "120px",
                    }}
                  >
                    {" "}
                    {v.lastName}
                  </TableCell>
                  <TableCell align="left"> {v.paymentMethod}</TableCell>
                  <TableCell align="left"> {v.employeId}</TableCell>
                  <TableCell align="left"> {v.role}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <Button onClick={handleClick}>Open simple snackbar</Button> */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="The Mobile Number of the User Alexender  Rechaium  us changed"
      />
      <Snackbar
        open={openAdd}
        autoHideDuration={6000}
        onClose={handleCloseAdd}
        message="The User Is added"
      />
    </>
  );
}
