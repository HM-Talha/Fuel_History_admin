import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.8em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      background: "gray",
    }
  },
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "8px",
  },
  container: {

    maxHeight: "500px",
    position: "relative",
    // bottom: "10px",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      height:12,

    },
    "&::-webkit-scrollbar-track": {
      background: "#F4F4F4",
      boxShadow: "inset 4px 4px 3px rgba(0, 0, 0, 0.15)",
      borderRadius: "10px",
    },

    /* Handle */
    "&::-webkit-scrollbar-thumb": {
      background: "#0016BB",
      borderRadius: 20,
      transform: "matrix(-1, 0, 0, 1, 0, 0)",
      boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.15)",
      height:20,
    },
    
    /* Handle on hover */
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#0D28F4",
      height:20,
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
      // backgroundColor: "transparent",
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
      // backgroundColor: "transparent",
      color: "#BDBDBD",
    },
  },
  tableBody: {
    backgroundColor: "transparedrent",
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
    border: "1px solid transparent",
    // maxHeight: "524px",
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
});
