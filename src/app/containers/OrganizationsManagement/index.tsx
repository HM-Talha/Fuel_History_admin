import React, { useEffect, useState } from "react";
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors";
import { reducer, sliceKey, actions } from "./redux/slice";
import { useUserSaga } from "./redux/saga";
import { useDispatch } from "react-redux";
import CustomButton from "../../components/CustomButton";
import {
  Box,
  Button,
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  Modal,
  Typography,
  Paper,
  SelectChangeEvent,
  Snackbar,
} from "@mui/material";
import { useStyles } from "./styles";
import DataTable from "app/components/DataTable";
import DeleteModal from "app/components/DeleteModal";
import { useSelector } from "react-redux";
import { selectList, selectLoading, selectQuery } from "./redux/selector";
import InfiniteScroll from "react-infinite-scroller";
import TableLoader from "app/components/TableLoader";
import { selectSearch } from "../Dashboard/selector";
import Loader from "app/components/Loader";
import Topbar from "../Dashboard/components/topbar/index";
import Addbtn from "../OrganizationsManagement/assets/Buttonplus.png";
import { CustomDrawer } from "app/components/Drawer";
import { useNavigate } from "react-router-dom";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CustomTable from "../../components/CustomTable/index";

const OrganizationsManagement = () => {
  const [openRemoveModal, setOpenRemoveModal] = useState<any | null>(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openDelete, setDelete] = useState(false);
  const [dropDownValue, setDropDownValue] = useState<string>(
    "Choose Payment Method"
  );
  const [addedValue, setAddedValue] = useState<any>();
  const [activeVal, setActiveVal] = useState<boolean>();
  const [resetPasswordOpen, setResetPasswordOpen] = useState(false);
  const listitems = useSelector(selectList);
  const { links, items } = listitems;
  const [creationDateState, setCreationDateState] = useState<
    Array<{ startDate: Date | null; endDate: Date | null; key: string }>
  >([{ startDate: null, endDate: null, key: "selection" }]);
  const [open, setOpen] = React.useState(false);
  const [openAdd, setOpenAdd] = React.useState(false);
  const [editedDateState, setEditedDateState] = useState<
    Array<{ startDate: Date | null; endDate: Date | null; key: string }>
  >([{ startDate: null, endDate: null, key: "selection" }]);
  const {
    q,
    orderField,
    orderDirection,
    distributorId,
    user_type,
    createMax,
    createMin,
    updateMax,
    updateMin,
  } = useSelector(selectQuery);
  const searchField = useSelector(selectSearch);
  const styles = useStyles();
  const navigate = useNavigate();
  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga: useUserSaga });
  const handleClose = () => {
    // setOpenRemoveModal(null);
    setOpen(false);
  };

  const columns = [
    {
      id: "Status",
      label: "Status",
      sortValue: "selector.Status",
    },
    {
      id: "fisrtName",
      label: "Fisrt Name",
      sortValue: "selector.fisrtName",
      // format: (value) => value.firstName || "-",
    },
    {
      id: "lastName",
      label: "Last Name",
      sortValue: "selector.lastName",
      // format: (value) => value.lastName || "-",
    },
    {
      id: "paymentMethod",
      label: "Payment Method",
      sortValue: "selector.paymentMethod",
      width: "18%",
      // align:'right',
    },
    {
      id: "employeId",
      label: "Employee ID Number",
      sortValue: "selector.employeId",
      width: "18%",
      // align:'right',
    },
    {
      id: "role",
      label: "Role",
      sortValue: "selector.role",
      width: "18%",
      // align:'right',
    },
  ];

  useEffect(() => {
    dispatch(actions.setQuery({ name: "q", value: searchField }));
  }, [searchField]);

  const handleEditClose = () => {
    dispatch(actions.resetNewUserForm());
    setEditModalOpen(false);
  };

  const onConfirmeDelete = () => {
    if (openRemoveModal) {
      dispatch(actions.handleBlock(openRemoveModal?.id));
      setOpenRemoveModal(null);
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {}, [
    q,
    orderDirection,
    orderField,
    distributorId,
    user_type,
    createMax,
    createMin,
    updateMax,
    updateMin,
    dispatch,
  ]);

  const setPageQuery = (name: string, value: any) => {
    dispatch(actions.setQuery({ name, value }));
  };

  const getNextPage = () => {
    setTimeout(() => {
      dispatch(actions.getNextPage(links.next));
      return false;
    }, 1000);
  };
  const handleModal = () => {
    localStorage.setItem("edit", "false");
    navigate("mobile-users-add?mode=add");
  };
  const handleModalClose = () => {
    setOpenModal(false);
  };
  const handleEdit = () => {
    navigate("/organizations/organization-details?mode=edit");
  };

  const handleDoubleClick = () => {
    navigate("mobile-users-details");
  };

  const handleDelete = () => {
    setDelete(true);
  };
  const handleDeleteClose = () => {
    setDelete(false);
  };
  const hasMoreItems = !!links.next;
  const loading = useSelector(selectLoading);

  const DropDownNames = ["Credit Card", "Salary"];

  const handleChange = (event: SelectChangeEvent) => {
    setDropDownValue(event.target.value);
    // console.log("dropDownValue", dropDownValue);
  };
  const handleSwitch = (event: SelectChangeEvent, row: any) => {};

  const handleClick = () => {
    setOpen(true);
  };
  useEffect(() => {
    setTimeout(() => {
      if (!activeVal) {
        setOpen(false);
      }
    }, 6000);
  });
  useEffect(() => {
    if (activeVal === false) {
      handleClick();
    }
  }, [activeVal]);
  useEffect(() => {
    const added = sessionStorage.getItem("added");
    const addedVal = sessionStorage.getItem("addedVal");

    let parseData;
    if (typeof addedVal === "string") {
      parseData = JSON.parse(addedVal);
    }

    if (added == "true") {
      setAddedValue(parseData);
      // console.log("parseData", addedValue);
      setOpenAdd(true);
    }
  });
  useEffect(() => {
    setTimeout(() => {
      setOpenAdd(false);
      sessionStorage.setItem("added", "false");
      const added = sessionStorage.getItem("added");
      // console.log("add", added);
    }, 3000);
  }, [openAdd]);
  return (
    <div className={styles.mainContainer}>
      <CustomDrawer />

      <Grid item xs={12}>
        <Topbar />
        <div className={styles.root}>
          <div className={styles.header_box}>
            <Box>
              <label className={styles.label}>Payment Method</label>
              <Select
                margin="dense"
                fullWidth
                required
                autoComplete={"off"}
                onChange={handleChange}
                value={dropDownValue}
                sx={{
                  color: "#727F89",
                  width: "250px",
                  height: "56px",
                  borderRadius: "4px",
                  background: "#fff",
                  border: "1px solid #E2E7EB",
                }}
                IconComponent={KeyboardArrowDownIcon}
              >
                <MenuItem value={"Choose Payment Method"} defaultChecked>
                  Choose Payment Method
                </MenuItem>

                {DropDownNames.map((name, i) => {
                  return (
                    <MenuItem value={name} key={i}>
                      {name}
                    </MenuItem>
                  );
                })}
              </Select>
            </Box>
            <Box>
              <CustomButton text="Import From Excel" />
            </Box>
          </div>
          <div className={styles.tableDiv}>
            <CustomTable
              dropDownValue={dropDownValue}
              setActiveVal={setActiveVal}
            />
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              message="The User Alexendar Eyal is disable"
            />
            <Snackbar
              open={openAdd}
              autoHideDuration={6000}
              // onClose={handleCloseAdd}
              message={`The User ${addedValue?.firstName} ${addedValue?.lastName} Is added`}
            />
            {/* <Modal
              open={openDelete}
              onClose={handleDeleteClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Card className={styles.deleteModal}>
                <div className={styles.modalContainer}>
                  <Grid>
                    <Typography align="center" className={styles.headerModal}>
                      Delete Organization
                    </Typography>
                  </Grid>
                  <Grid sx={{ padding: "30px 0px" }}>
                    <Typography align="center" className={styles.deleteTypo}>
                      Do you really want to delete organization 1?
                    </Typography>
                  </Grid>

                  <div>
                    <Grid container spacing={3}>
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
                          onClick={handleDeleteClose}
                        >
                          Cancel
                        </Button>
                      </Grid>
                      <Grid container item xs={6} direction="column">
                        <Button className={styles.saveBtn} variant="contained">
                          Delete
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Card>
            </Modal> */}
          </div>
          <div className={styles.btnDiv}>
            <Button onClick={handleModal}>
              <img height="45px" src={Addbtn}></img>
            </Button>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default OrganizationsManagement;
