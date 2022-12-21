import { Button } from "@mui/material";
import React from "react";

type Props = {
  text: string;
};
const CustomButton = (props: Props) => {
  return (
    <Button
      sx={{
        background: "#0D28F4",
        color: "#fff",
        width: "220px",
        height: "56px",
        borderRadius: "4px",
        fontWeight: 700,
        fontSize: "16px",
        letterSpacing: "1px",
        "&:hover": {
          background: "#0016BB",
        },
      }}
      color="success"
    >
      {props.text}
    </Button>
  );
};

export default CustomButton;
