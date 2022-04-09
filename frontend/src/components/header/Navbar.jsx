import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Box, Hidden, IconButton } from "@material-ui/core";
import Profile from "./navtabs/Profile";
import Notification from "./navtabs/Notification";
import useStyles from "./HeaderStyle";
import Message from "./navtabs/Message";
import MenuIcon from "@material-ui/icons/Menu";

export default function Navbar({ handleDraweropen }) {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">Admin Panel</Typography>
        <Hidden smDown>
          <Box style={{ display: "flex" }}>
            <Notification />
            <Message />
            <Profile />
          </Box>
        </Hidden>

        <Hidden mdUp>
          <IconButton color="inherit" onClick={handleDraweropen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
