import React from 'react'
import { List,ListItem, ListItemIcon } from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard';
import BookIcon from '@material-ui/icons/Book';
import PostAddIcon from '@material-ui/icons/PostAdd';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { NavLink } from 'react-router-dom';
export default function SidenavData() {

    const SideNavData=[
        {
            label:'Dashboard',
            icon:<DashboardIcon/>,
            link:'/'
        },
        {
            label:'Blog Post',
            icon:<BookIcon/> ,
            link:'/blogpost'
        },
        {
            label:'Link 1',
            icon:<PostAddIcon/>,
            link:'/link'
        },
        {
            label:'Notification',
            icon:<NotificationsActiveIcon/>,
            link:'/notification'
        },
        {
            label:'Logout',
            icon:<ExitToAppIcon/>,
            link:'/logout'
        },
        
    ]
  return (
   <List>
       {SideNavData.map((item,i)=>(
        <ListItem key={i} component={NavLink} to={item.link} >
            <ListItemIcon >{item.icon}</ListItemIcon>
            <ListItemIcon>{item.label}</ListItemIcon>
        </ListItem>
       ))}
       
   </List>
  )
}
