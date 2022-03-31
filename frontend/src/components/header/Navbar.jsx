import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Box, Hidden, IconButton } from "@material-ui/core";
import Profile from "./navtabs/Profile";
import Notification from "./navtabs/Notification";
import useStyles from "./HeaderStyle";
import Message from "./navtabs/Message";
import MenuIcon from '@material-ui/icons/Menu';


export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ margin: "0", padding: "0" }}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">Admin Panel</Typography>
          <Hidden smDown>
          <Box style={{display:'flex'}}>
          < Notification/>
           <Message/>
           <Profile />
          </Box>
          </Hidden>

          <Hidden mdUp>
            <IconButton color="inherit" onClick={()=>console.log("Hello Menu ")} >
            <MenuIcon />
            </IconButton>
            
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}