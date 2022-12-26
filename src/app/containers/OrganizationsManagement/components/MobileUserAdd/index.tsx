import {
  TextField,
  MenuItem,
  Divider,
  Button,
  List,
  ListItem,
  ListItemText,
  Grid,
  Typography,
  Box,
  Tabs,
  Tab,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Addbtn from "../../assets/Buttonplus2.png";
import { useStyles } from "./style";
import Topbar from "../../../Dashboard/components/topbar";
import { style } from "@mui/system";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { CustomDrawer } from "app/components/Drawer";
import Back from "../OrganizationDetails/assets/Back.png";
import uploadBtn from "../GroupTreatment/assets/Upload.png";
import CustomTable from "./CustomTable/index";

type Props = {};

const MobileUserAdd = (props: Props) => {
  const styles = useStyles();
  const navigate = useNavigate();
  const params = useLocation();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [value, setValue] = useState(0);
  const [disable, setDisable] = useState(true);
  const { state } = useLocation();
  const [btnDisable, setBtnDisable] = useState<boolean>(false);
  const [editVal, setEditVal] = useState<any>({
    firstName: "",
    lastName: "",
    paymentMethod: "Credit Card",
    employeId: "123456487",
    role: "",
    number: "",
    email: "",
    id: 123,
    status: "active",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditVal((old) => ({
      ...old,
      [name]: value,
    }));
    // setBtnDisabled(!e.target.value);
    if (
      editVal.firstName &&
      editVal.lastName &&
      editVal.paymentMethod &&
      editVal.employeId &&
      editVal.role &&
      editVal.number &&
      editVal.email
    ) {
      setBtnDisable(true);
    } else {
      setBtnDisable(false);
    }
  };

  // const handleTabChange = (event, value) => {
  //   setValue(value);
  // };
  const handleEditButton = () => {
    setDisable(false);
  };
  const handleCancelBtn = () => {
    if (
      params.search.split("=")[1] === "add" ||
      params.search.split("=")[1] === "edit"
    ) {
      navigate("/mobile-users");
    }
    setDisable(true);
  };
  const handleAddbtn = () => {
    navigate("/organizations/organization-details/add-group-treatment");
  };
  useEffect(() => {
    if (
      params.search.split("=")[1] === "add" ||
      params.search.split("=")[1] === "edit"
    ) {
      setDisable(false);
    }
  }, []);
  const saveAction = () => {
    navigate("/mobile-users", { state: editVal });
    sessionStorage.setItem("added", "true");
    sessionStorage.setItem("addedVal", JSON.stringify(editVal));
    // console.log("editval", editVal);
  };
  return (
    <div className={styles.mainContainer}>
      {/* <Grid item xs={2}> */}
      <CustomDrawer />
      {/* </Grid> */}
      <Grid item xs={12}>
        <Topbar />
        <div className={styles.root}>
          <Grid>
            <div className={styles.mainHeader}>
              <img
                src={Back}
                className={styles.imgClass}
                onClick={() => navigate(-1)}
              />
              <Typography className={styles.textHeader}>
                Mobile Users /
              </Typography>
              {params.search.split("=")[1] === "add" ? (
                <Typography className={styles.textHeaderT}>
                  Add Mobile Users
                </Typography>
              ) : (
                <Typography className={styles.textHeaderT}>
                  Mobile Users Details Add Mode
                </Typography>
              )}
            </div>
          </Grid>
          <Grid sx={{ padding: "20px 0px 0px 0px" }}>
            <Grid
              item
              container
              spacing={2}
              md={10}
              sx={{ paddingBottom: "10px" }}
            >
              <Grid item xs={3}>
                <label className={styles.label}>First Name*</label>
                <TextField
                  onChange={handleChange}
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  disabled={false}
                  required
                  id="firstName"
                  placeholder="Enter name"
                  name="firstName"
                  autoComplete={"off"}
                  autoFocus
                  className={styles.textEnabled}
                />
              </Grid>
              <Grid item xs={3}>
                <label className={styles.label}>Last Name*</label>
                <TextField
                  onChange={handleChange}
                  variant="outlined"
                  margin="dense"
                  required
                  fullWidth
                  disabled={false}
                  id="lastName"
                  placeholder="Enter Last Name"
                  name="lastName"
                  autoComplete={"off"}
                  autoFocus
                  className={styles.textEnabled}
                />
              </Grid>
              <Grid item xs={3}>
                <label className={styles.label}>Employee ID Number</label>
                <TextField
                  onChange={handleChange}
                  variant="outlined"
                  margin="dense"
                  required
                  fullWidth
                  disabled={false}
                  id="emplyeId"
                  placeholder="Enter Employee Id"
                  name="emplyeId"
                  autoComplete={"off"}
                  autoFocus
                  className={styles.textEnabled}
                />
              </Grid>
              <Grid item xs={3}>
                <label className={styles.label}>Instalation ID</label>
                <TextField
                  // onChange={handleChange}
                  variant="outlined"
                  margin="dense"
                  required
                  fullWidth
                  disabled={false}
                  id="username"
                  placeholder="Enter Instalation"
                  name="username"
                  autoComplete={"off"}
                  autoFocus
                  className={styles.textEnabled}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid sx={{ padding: "20px 0px 0px 0px" }}>
            <Grid
              item
              container
              spacing={2}
              md={10}
              sx={{ paddingBottom: "10px" }}
            >
              <Grid item xs={3}>
                <label className={styles.label}>Role</label>
                <TextField
                  onChange={handleChange}
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  disabled={false}
                  required
                  id="role"
                  placeholder="Enter Role"
                  name="role"
                  autoComplete={"off"}
                  autoFocus
                  className={styles.textEnabled}
                />
              </Grid>
              <Grid item xs={3}>
                <label className={styles.label}>Email</label>
                <TextField
                  onChange={handleChange}
                  variant="outlined"
                  margin="dense"
                  required
                  fullWidth
                  disabled={false}
                  id="email"
                  placeholder="Enter Email"
                  name="email"
                  autoComplete={"off"}
                  autoFocus
                  className={styles.textEnabled}
                />
              </Grid>
              <Grid item xs={3}>
                <label className={styles.label}>Mobile Number</label>
                <TextField
                  onChange={handleChange}
                  variant="outlined"
                  margin="dense"
                  required
                  fullWidth
                  disabled={false}
                  id="number"
                  placeholder="Enter contact email"
                  name="number"
                  autoComplete={"off"}
                  autoFocus
                  className={styles.textEnabled}
                  sx={{ color: "red" }}
                />
              </Grid>
              <Grid className={styles.uploadBox} item xs={3}>
                <Grid className="">
                  <img width="30px" src={uploadBtn}></img>
                  <label className={styles.uploadLabel}>
                    Upload Signed Agreement`
                  </label>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            container
            spacing={2}
            md={12}
            sx={{ padding: "0px 0px 0px 15px" }}
          >
            <Box
              sx={{ width: "100%", marginTop: "40px", marginBottom: "50px" }}
            >
              <CustomTable disable={disable} />
            </Box>
          </Grid>

          <Grid
            item
            container
            columnGap={3}
            style={{ display: "flex", justifyContent: "flex-end" }}
            sx={{ padding: "0px 14px 20px 0px" }}
            md={12}
          >
            {disable ? (
              <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
                <Grid>
                  <Button
                    className={styles.saveBtn}
                    variant="contained"
                    onClick={saveAction}
                  >
                    Save
                  </Button>
                </Grid>

                <Grid
                  container
                  columnGap={3}
                  style={{ display: "flex", justifyContent: "flex-end" }}
                ></Grid>
              </Box>
            ) : (
              <Box sx={{ display: "flex" }}>
                <Grid>
                  <Button
                    className={styles.cancelBtn}
                    variant="outlined"
                    onClick={handleCancelBtn}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    disabled={btnDisable ? false : true}
                    sx={{
                      background: btnDisable
                        ? "#0D28F4 !important"
                        : "#87959F !important",
                      color: "#fff !important",
                    }}
                    className={styles.saveBtn}
                    variant="contained"
                    onClick={saveAction}
                  >
                    Save
                  </Button>
                </Grid>
              </Box>
            )}
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default MobileUserAdd;
