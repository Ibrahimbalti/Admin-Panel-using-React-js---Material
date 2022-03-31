import React from 'react'
import { List,ListItem, ListItemIcon } from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard';
import BookIcon from '@material-ui/icons/Book';
import PostAddIcon from '@material-ui/icons/PostAdd';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
export default function SidenavData() {

    const SideNavData=[
        {
            label:'Dashboard',
            icon:<DashboardIcon/>,
        },
        {
            label:'Blog Post',
            icon:<BookIcon/>
        },
        {
            label:'Link 1',
            icon:<PostAddIcon/>
        },
        {
            label:'Notification',
            icon:<NotificationsActiveIcon/>
        },
        {
            label:'Logout',
            icon:<ExitToAppIcon/>
        },
        
    ]
  return (
   <List>
       {SideNavData.map((item,i)=>(
        <ListItem key={i}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemIcon>{item.label}</ListItemIcon>
        </ListItem>
       ))}
       
   </List>
  )
}
