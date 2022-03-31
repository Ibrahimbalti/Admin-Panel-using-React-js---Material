import React from "react";
import Menu from "@material-ui/core/Menu";
import { Box, IconButton,Badge, ListItem, ListItemIcon, ListItemText, Avatar } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { List } from "@material-ui/core";
import useStyles from "../HeaderStyle";
export default function Notification() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dropdownData=[
      {
          label:'Ishq',
          des:"Nice poem"
      },
      {
        label:'Bari',
        des:"Nice poem"
    },
    {
        label:'Bari',
        des:"Nice poem"
    },
  ]

  const classes = useStyles();
  return (
    <Box>
      <IconButton
        aria-controls="notification"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <Badge badgeContent={4} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Menu
        id="notification"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
          <List className={classes.navlist}>
          { dropdownData.map((item,i)=>(
            <ListItem onClick={handleClose}  key={i} >
                <ListItemIcon>{<Avatar className={classes.ulAvatar} >{item.label[0].toUpperCase()}</Avatar>}</ListItemIcon>
                <ListItemText primary={item.label} secondary={item.des} ></ListItemText>
            </ListItem>
          ))}
        </List>
      </Menu>
    </Box>
  );
}
