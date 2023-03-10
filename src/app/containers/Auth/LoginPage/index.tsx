import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet, useLocation } from "react-router-dom";
import { selectDirection } from "styles/theme/slice";
import Logo from "../../../../assets/Image.png";
import { Card, Grid } from "@mui/material";
// import { useSelector } from 'react-redux';
import Box from "@mui/material/Box";
// import { makeStyles } from '@mui/material/styles';
import Typography from "@mui/material/Typography";

// import withWidth, { isWidthDown } from '@mui/material/withWidth';
// import { selectLoading, selectLoginForm } from '../selectors';
import { useLgStyles } from "./styles";
import loginImage from "assets/Image.png";
import clsx from "clsx";

export function LoginPage() {
  const classes = useLgStyles();
  const location = useLocation();
  const direction = useSelector(selectDirection);
  // const classesSm = useSmStyles();

  useEffect(() => {
    // console.log(direction);
  }, [direction]);

  return (
    <div className={classes.root}>
      <Box className={classes.main}>
        <Grid container rowSpacing={1}>
          <Grid item md={4} className={classes.leftMain}>
            <Box className={classes.left} flexDirection={"column"}>
              {/* form Logo orpak */}
              <img src={Logo} />
              <Box className={classes.loginTexts}></Box>
            </Box>
          </Grid>
          <Grid
            item
            md={8}
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "5rem",
              background: "#F4F8FF",
            }}
          >
            <Box className={classes.right}>
              <Outlet />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default LoginPage;
