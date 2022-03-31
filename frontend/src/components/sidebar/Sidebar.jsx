import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { Typography } from "@material-ui/core";
import useStyles from "./SidebarStyle";
import SidenavData from "./SidenavData";

export default function Sidebar() {
  const [Mobileopen, Setmobileopen] = useState(false);
  const classes = useStyles();

  const handleDraweropen = () => {
    Setmobileopen(!Mobileopen);
  };
  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          
          variant="temporary"
          anchor={"left"}
          open={Mobileopen}
          onClose={handleDraweropen}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <Typography variant="h6">< SidenavData/></Typography>
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <Typography variant="h6">< SidenavData/></Typography>
        </Drawer>
      </Hidden>
    </nav>
  );
}
