import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "8px",
  },
  container: {
    minHeight: "150px",
    // paddingRight: 5,
    border: "none",
    position: "relative",
    bottom: "10px",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: 13,
      height: 8,
      padding: "5px 0px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#F4F4F4",
      boxShadow: "inset 4px 4px 3px rgba(0, 0, 0, 0.15)",
      borderRadius: "10px",
    },

    /* Handle */
    "&::-webkit-scrollbar-thumb": {
      background: "#387E8D",
      borderRadius: 20,
      border: "3px solid #387E8D",
      transform: "matrix(-1, 0, 0, 1, 0, 0)",
      boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.15)",
    },

    /* Handle on hover */
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#387E8D",
    },
  },
  tableSort: {
    color: "#2A3333 !important",
    "& svg": {
      color: "#2A3333 !important",
    },
  },
  cellHead: {
    // minWidth: 170,
    position: "sticky",
    padding: "14px 14px 17px 16px",
    fontSize: 14,
    fontWeight: 700,
    lineHeight: "16.71px",
    // textAlign: "unset",
    color: "#1D1F20",
    whiteSpace: "nowrap",
    height: 56,
    fontFamily: "Open Sans",
    background: "#F4F8FF",
    "&:last-child": {},
    "&:first-child": {},
    "&:first-of-type": {
      borderLeft: "transparent",
    },
    "&.makeStyles-cellHead-33": {
      backgroundColor: "transparent",
      color: "#BDBDBD",
    },
  },
  cellHeadWithoutWidth: {
    position: "sticky",
    padding: "14px 14px 17px 16px",
    fontSize: 14,
    fontWeight: 700,
    lineHeight: "16.71px",
    textAlign: "unset",
    color: "#2A3333",
    whiteSpace: "nowrap",
    height: 56,
    fontFamily: "Open Sans",
    background: "#F4F8FF",
    "&:last-child": {},
    "&:first-child": {},
    "&:first-of-type": {
      borderLeft: "transparent",
    },
    "&.makeStyles-cellHead-33": {
      backgroundColor: "transparent",
      color: "#BDBDBD",
    },
  },
  tableBody: {
    backgroundColor: "transparent",
    "& .MuiTableRow-root:nth-of-type(even)": {
      backgroundColor: "#F4F8FF",
    },
    border: "none",
    "& .MuiTableCell-root": {
      border: "none",
      backgroundColor: "transparent",
    },
  },
  table: {
    border: "1px solid #C6C9CA",
    // height: "524px",
  },
  headerCheckbox: {
    padding: 0,
    width: 18,
    height: 18,
    marginRight: 6,
  },
  customCheckbox: {
    padding: 0,
    width: 18,
    height: 18,
  },
  iconButton: {
    padding: "0px",
    marginLeft: "5px",
    marginRight: "5px",
  },
  overrideIconButton: {
    position: "relative",
    right: -20,
  },
  downloadBtn: {
    cursor: "pointer",
  },
  messageModal: {
    position: "absolute",
    background: "#FFFFFF",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "0px",
    boxShadow: "0",
    zIndex: "9999",
    width: "496px",
    height: "242px",
  },

  modalContainer: {
    padding: "20px 40px 40px 40px",
  },
  headerModal: {
    color: "#387E8D",
    fontFamily: "Cairo",
    fontWeight: "800",
    fontSize: "24px",
  },
  chipBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    border: "1px solid #C6C9CA",
    height: "40px",
    padding: "10px",
    background: "#FFF",
  },
  chipLabel: {
    fontFamily: "Cairo",
    fontWeight: "600px",
    fontSize: "16px",
    color: "#387E8D",
    marginTop: "15px",
  },
  numLabel: {
    fontFamily: "Cairo",
    fontWeight: "400px",
    fontSize: "14px",
    marginLeft: "16px",
    color: "#6C7A7A",
    marginTop: "16px",
  },
  btnContainer: {
    display: "flex",
    alignItems: "flex-end",
  },
  saveBtn: {
    background: "#0D28F4",
    color: "#fff",
    height: 56,
    "&:hover": {
      background: "#0D28F4",
    },
    fontFamily: "Cairo",
    fontWeight: 700,
    fontSize: "16px",
    width: "170px",
    marginRight: "30px",
  },
  cancelBtn: {
    color: "#0D28F4",
    borderColor: "#0D28F4",
    height: 56,
    "&:hover": {
      borderColor: "#C66078",
    },
    fontFamily: "Cairo",
    fontWeight: 700,
    fontSize: "16px",
    width: "170px",
    marginRight: "5px",
  },
  modalText: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 20,
  },
});
