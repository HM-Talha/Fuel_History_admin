import * as React from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Styles } from "./styles";
import inHealLogo from "../../assets/inHealLogo.png";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../assets/Image.png";
const drawerWidth = 270;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const DynamicIcon = ({ icon, color }) => {
  switch (icon) {
    case icon:
      return (
        <span className="material-icons" style={{ color: color }}>
          {" "}
          {icon}{" "}
        </span>
      );

    default:
      return (
        <span className="material-icons" style={{ color: color }}>
          {" "}
          dashboard{" "}
        </span>
      );
  }
};

export const CustomDrawer = (props: Props) => {
  const styles = Styles();
  const location = useLocation();
  const navigate = useNavigate();
  const [urlParam, setUrlParam] = React.useState("");

  React.useEffect(() => {
    setUrlParam(location.pathname.split("/")[1]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const drawerItems = [
    {
      name: "Mobile Users",
      icon: "people",
      route: "mobile-users",
    },
    {
      name: "Fueling History",
      icon: "local_gas_station",
      route: "push-notification",
    },
  ];

  const drawerNavigation = (name, url) => {
    setUrlParam(url);
    url !== undefined &&
      ![
        "dashboard",
        // "questionnaires-result",
      ].includes(url) &&
      navigate(`/${url}`);
  };
  // console.log("url params", ddrawerItems.route);

  const drawer = (
    <div>
      <div className={styles.logoImage}>
        <img src={Logo} alt="logo" width="210px" height="85px" />
      </div>
      <List>
        {drawerItems.map((item, index) => {
          // <ListItem key={text} disablePadding className={urlParam === text.replace(/\s+/g, '-').toLowerCase() ? styles.drawerListItems : ''} onClick={() => setUrlParam(text)}>
          const name = item.name;
          const route = item.route;
          return (
            <ListItem
              key={index}
              disablePadding
              className={urlParam === route ? styles.drawerListItems : ""}
              onClick={() => drawerNavigation(name, route)}
            >
              <ListItemButton>
                <ListItemIcon>
                  <DynamicIcon
                    icon={item.icon}
                    color={urlParam === route ? "#0016BB" : "black"}
                  />
                </ListItemIcon>
                <ListItemText
                  className={
                    urlParam === route ? styles.drawerListItemText : ""
                  }
                  disableTypography
                >
                  {" "}
                  {name}{" "}
                </ListItemText>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              boxShadow: "0 0 5px rgba(0,0,0,0.20)",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
