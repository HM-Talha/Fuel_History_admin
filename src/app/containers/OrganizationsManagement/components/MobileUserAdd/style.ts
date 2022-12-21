import { BorderColor } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  mainContainer: {
    background: "#F4F8FF",
    minHeight: "100%",
    minWidth: "100%",
    position: "absolute",
    bottom: "auto",
  },
  root: {
    padding: "40px 30px 0px 300px",
  },

  imgClass: {
    height: 20,
    width: 20,
    cursor: "pointer",
  },
  textHeader: {
    color: "#2A3333",
    marginLeft: "14px",
    fontWeight: 600,
    fontFamily: "Open Sans",
    fontSize: "18px",
    lineHeight: "29.98px",
    fontStyle: "Semibold",
  },
  textHeaderT: {
    color: "#2E40C8",
    fontWeight: 600,
    fontFamily: "Open Sans",
    fontSize: "18px",
    lineHeight: "29.98px",
  },
  mainHeader: {
    display: "flex",
    alignItems: "center",
    marginTop: "100px",
  },
  label: {
    fontFamily: "Cairo",
    fontWeight: 400,
    fontSize: "16px",
    color: "#2A3333",
  },
  saveBtn: {
    background: "#0D28F4",
    color: "#fff",
    "&:hover": {
      background: "#C66078",
    },

    fontFamily: "Cairo",
    fontWeight: 700,
    fontSize: "16px",
    width: "160px",
    height: "50px",
  },
  commentSaveBtn: {
    background: "#C66078",
    color: "#ffff",

    "&:hover": {
      background: "#C66078",
    },

    fontFamily: "Cairo",
    fontWeight: 700,
    fontSize: "16px",
    width: "120px",
    height: "56px",
  },
  cancelBtn: {
    color: "#0D28F4",
    borderColor: "#0D28F4",
    "&:hover": {
      borderColor: "#C66078",
    },
    fontFamily: "Cairo",
    fontWeight: 700,
    fontSize: "16px",
    width: "160px",
    height: "50px",
    marginRight: "30px",
  },
  tabLabel: {
    color: "#C66078",
    fontWeight: "bold",
  },
  textEnabled: {
    background: "#FFF",
    border: "none !important",
    "& fieldset": { border: "none" },
    boxShadow:
      "10px 31px 9px rgba(232, 232, 232, 0.01), 7px 20px 8px rgba(232, 232, 232, 0.04), 4px 11px 7px rgba(232, 232, 232, 0.15), 2px 5px 5px rgba(232, 232, 232, 0.26), 0px 1px 3px rgba(232, 232, 232, 0.29), 0px 0px 0px rgba(232, 232, 232, 0.3)",
    borderRadius: "4px",
  },
  uploadBox: {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    borderRadius: "4px",
    borderWidth: "1px",
    borderColor: "#6C7A7A",
    height: "56px",
    position: "relative",
    top: "47px",
    left: "19px",
    width: "378px",
    background: "#FFF",
    textAlign: "center",
    boxShadow:
      "10px 31px 9px rgba(232, 232, 232, 0.01), 7px 20px 8px rgba(232, 232, 232, 0.04), 4px 11px 7px rgba(232, 232, 232, 0.15), 2px 5px 5px rgba(232, 232, 232, 0.26), 0px 1px 3px rgba(232, 232, 232, 0.29), 0px 0px 0px rgba(232, 232, 232, 0.3)",
  },
  uploadLabel: {
    fontFamily: "Cairo",
    fontWeight: 600,
    positon: "relative",
    bottom: "30px",
    fontSize: "16px",
    lineHeight: "21.79px",
    marginLeft: "16px",
    color: "#727F89",
  },
  addBtnImage: {
    filter: "greyscale(100%)",
  },

}));
