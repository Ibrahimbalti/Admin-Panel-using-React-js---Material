import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Box, IconButton,Badge, ListItem, ListItemIcon, ListItemText, Avatar } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import useStyles from "../HeaderStyle";


export default function Profile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dropdownData=[
      {
          label:'Setting',
          icons:<SettingsIcon/>
      },
      {
        label:'Logout',
        icons:<ExitToAppIcon/>
    },
  ]
  return (
    <Box>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        startIcon={<Avatar src="images/profile/ibrahim.jpg"  className={classes.navAvatar}></Avatar>}
      >
        {/* <Badge badgeContent={4} color="secondary">
          <NotificationsIcon />
        </Badge> */}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
          { dropdownData.map((item,i)=>(
            <MenuItem onClick={handleClose} component={ListItem} key={i} >
                <ListItemIcon>{item.icons}</ListItemIcon>
                <ListItemText>{item.label}</ListItemText>
            </MenuItem>
          ))}
        
      </Menu>
    </Box>
  );
}
