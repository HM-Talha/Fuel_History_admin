import React, { useEffect, useState } from "react";
import { reducer, sliceKey, actions } from "./redux/slice";
import { useUserSaga } from "./redux/saga";
import { useDispatch } from "react-redux";
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
} from "@mui/material";
import CustomTable from "./components/CustomTable/index";
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
import InputField from "app/components/InputField";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PopoverDateRangePicker from "app/components/PopoverDateReangePicker";
import ServerRequestDatePicker from "app/components/PopoverDatepicker";
import CustomButton from "app/components/CustomButton";

const OrganizationsManagement = () => {
  const [openRemoveModal, setOpenRemoveModal] = useState<any | null>(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openDelete, setDelete] = useState(false);
  const [resetPasswordOpen, setResetPasswordOpen] = useState(false);
  const [organizationOpen, setOrganizationOpen] = useState(false);
  const [messagetypeOpen, setMessagetypeOpen] = useState(false);
  const [calenderDate, setCalenderDate] = useState<any>();
  const [dropDownValue, setDropDownValue] = useState<string>(
    "Choose Payment Method"
  );
  const [dropDownValue1, setDropDownValue1] =
    useState<string>("Choose Fuel Type");
  const [dropDownValue2, setDropDownValue2] = useState<string>(
    "Choose Station Name"
  );
  const listitems = useSelector(selectList);
  const { links, items } = listitems;
  const [dateTo, setDateTo] = useState<any>();
  const [dateFrom, setDateFrom] = useState<any>();
  const [creationDateState, setCreationDateState] = useState<
    Array<{ startDate: Date | null; endDate: Date | null; key: string }>
  >([{ startDate: null, endDate: null, key: "selection" }]);
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

  const handleClose = () => {
    setOpenRemoveModal(null);
  };

  const columns = [
    {
      id: "dateTimeSent",
      label: "Date Time Sent",
      sortValue: "selector.dateTimeSent",
    },
    {
      id: "organizationName",
      label: "Organization Name ",
      sortValue: "selector.organizationName",
      // format: (value) => value.firstName || "-",
    },
    {
      id: "departmentName",
      label: "Department name",
      sortValue: "selector.departmentName",
      // format: (value) => value.lastName || "-",
    },
    {
      id: "senderName",
      label: "Sender Name",
      sortValue: "selector.senderName",
      // align:'right',
    },
    {
      id: "partientsName",
      label: "Partients Name",
      sortValue: "selector.partientsName",
      // align:'right',
    },
    {
      id: "content",
      label: "Content",
      sortValue: "selector.content",
      // align:'right',
    },
  ];

  useEffect(() => {
    dispatch(actions.setQuery({ name: "q", value: searchField }));
  }, [searchField]);

  const onConfirmeDelete = () => {
    if (openRemoveModal) {
      dispatch(actions.handleBlock(openRemoveModal?.id));
      setOpenRemoveModal(null);
    }
  };
  const handleModal = () => {
    setOpenModal(true);
  };
  const handleModalClose = () => {
    setOpenModal(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(actions.getList());
  }, [
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
    // console.log(links, "links");
    setTimeout(() => {
      // console.log("reqChangeActions.getNextPageItems(links.next)==");
      dispatch(actions.getNextPage(links.next));
      return false;
    }, 1000);
  };

  const hasMoreItems = !!links.next;
  const loading = useSelector(selectLoading);
  const handleChange = (event: any) => {
    setDropDownValue(event.target.value);
    // console.log("dropDownValue", dropDownValue);
  };
  const DropDownNames = ["Credit Card", "Salary"];
  const handleChange1 = (event: any) => {
    setDropDownValue1(event.target.value);
    // console.log("dropDownValue", dropDownValue1);
  };
  const DropDownNames1 = ["95", "98"];
  const handleChange2 = (event: any) => {
    setDropDownValue2(event.target.value);
    // console.log("dropDownValue", dropDownValue2);
  };
  const DropDownNames2 = ["Station 1", "Station 2", "Station 3", "Station 4"];
  return (
    <div className={styles.mainContainer}>
      {/* <Grid item xs={2}> */}
      <CustomDrawer />
      {/* </Grid> */}
      <Grid item xs={10}>
        <Topbar />
        <div className={styles.root}>
          <Typography
            variant="h6"
            sx={{
              position: "relative",
              top: "5px",
              fontFamily: "Open Sans",
              fontWeight: 400,
              fontSize: "16px",
              color: "#727F89",
            }}
          >
            Fueling Dates:
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  display: "flex",
                  marginTop: "20px",
                }}
              >
                <Typography
                  sx={{
                    position: "relative",
                    top: "5px",
                    marginRight: "5px",
                    fontFamily: "Open Sans",
                    fontWeight: 400,
                    fontSize: "16px",
                    color: "#727F89",
                  }}
                >
                  From
                </Typography>
                <ServerRequestDatePicker getVal={setDateFrom} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  marginTop: "20px",
                  marginLeft: "20px",
                }}
              >
                <Typography
                  sx={{
                    position: "relative",
                    top: "5px",
                    marginRight: "5px",
                    fontFamily: "Open Sans",
                    fontWeight: 400,
                    fontSize: "16px",
                    color: "#727F89",
                  }}
                >
                  To
                </Typography>
                <ServerRequestDatePicker getVal={setDateTo} />
              </Box>
            </Box>
            <Box>
              <span style={{ margin: "10px" }}>
                <CustomButton text="Export To Excel" />
              </span>
              <span>
                <CustomButton text="Import From Excel" />
              </span>
            </Box>
          </Box>
          <Grid sx={{ padding: "20px 0px 0px 0px" }}>
            <Grid container spacing={2} md={12} sx={{ paddingBottom: "10px" }}>
              <Grid item xs={2}>
                <label className={styles.label}>Fuel Type</label>
                <Select
                  margin="dense"
                  fullWidth
                  required
                  autoComplete={"off"}
                  onChange={handleChange1}
                  value={dropDownValue1}
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
                  <MenuItem value={"Choose Fuel Type"} defaultChecked>
                    Choose Fuel Type
                  </MenuItem>

                  {DropDownNames1.map((name, i) => {
                    return (
                      <MenuItem value={name} key={i}>
                        {name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </Grid>
              <Grid
                item
                xs={2}
                sx={{
                  margin: "0 25px",
                }}
              >
                <label className={styles.label}>Station Number</label>
                <Select
                  margin="dense"
                  fullWidth
                  required
                  autoComplete={"off"}
                  onChange={handleChange2}
                  value={dropDownValue2}
                  sx={{
                    color: "#727F89",
                    width: "250px",
                    height: "56px",
                    borderRadius: "4px",
                    background: "#fff",
                    border: "1px solid #E2E7EB",
                    ".css-6hp17o-MuiList-root-MuiMenu-lis": {
                      border: "1px solid red !important",
                    },
                  }}
                  IconComponent={KeyboardArrowDownIcon}
                >
                  <MenuItem value={"Choose Station Name"} defaultChecked>
                    Choose Station Name
                  </MenuItem>

                  {DropDownNames2.map((name, i) => {
                    return (
                      <MenuItem value={name} key={i}>
                        {name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </Grid>
              <Grid item xs={2}>
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
              </Grid>
            </Grid>
          </Grid>
          <div className={styles.tableDiv}>
            <CustomTable
              dropDownVal1={dropDownValue1}
              dropDownValue={dropDownValue}
              dropDownValue2={dropDownValue2}
              dateFrom={dateFrom}
              dateTo={dateTo}
            />

            <Modal
              open={openModal}
              onClose={handleModalClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Card className={styles.addModal}>
                <div className={styles.modalContainer}>
                  <Grid>
                    <Typography align="center" className={styles.headerModal}>
                      Push Notification
                    </Typography>
                  </Grid>
                  <div className={styles.bodyContainer}>
                    <Grid container sx={{ border: "1px #C6C9CA solid" }}>
                      <Grid
                        item
                        xs={3}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <label className={styles.labelHead}>Day</label>
                        <label className={styles.labelItem}>15.06.2022</label>
                      </Grid>
                      <Grid
                        item
                        xs={3}
                        sx={{ display: "flex", flexDirection: "column" }}
                      >
                        <label className={styles.labelHead}>Message Type</label>
                        <label className={styles.labelItem}>Free Text</label>
                      </Grid>
                      <Grid
                        item
                        xs={3}
                        sx={{ display: "flex", flexDirection: "column" }}
                      >
                        <label className={styles.labelHead}>Sender</label>
                        <label className={styles.labelItem}>Eliaho</label>
                      </Grid>
                      <Grid
                        item
                        xs={3}
                        sx={{ display: "flex", flexDirection: "column" }}
                      >
                        <label className={styles.labelHead}>Patient</label>
                        <label className={styles.labelItem}>Alex</label>
                      </Grid>
                    </Grid>
                    <Grid container sx={{ padding: "10px 0px" }}>
                      <Grid item xs={12}>
                        <label className={styles.labelContent}>Content</label>
                        <TextField
                          fullWidth
                          variant="outlined"
                          required
                          multiline
                          autoComplete={"off"}
                          autoFocus
                          rows={3}
                          className={styles.textEnabled}
                        ></TextField>
                      </Grid>
                    </Grid>
                  </div>

                  <div>
                    <Grid container spacing={3}>
                      <Grid
                        className={styles.btnContainer}
                        container
                        item
                        direction="column"
                      >
                        <Button
                          className={styles.cancelBtn}
                          variant="outlined"
                          onClick={handleModalClose}
                        >
                          Cancel
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Card>
            </Modal>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default OrganizationsManagement;
