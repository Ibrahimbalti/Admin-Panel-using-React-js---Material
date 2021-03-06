import React,{useState} from "react";
import Navbar from "./Navbar";
import Sidebar from "../sidebar/Sidebar";
import { Box } from "@material-ui/core";
import {Routes,Route} from 'react-router-dom'
import Dashbord from "../Body/dashboard/Dashbord";
import Blogpost from "../Body/Blogpost";
import Notification from "../Body/Notification";
import Logout from "../Body/Logout";
import useStyles from "./HeaderStyle";
import Links from "../Body/Links";
export default function Headercomponents() {

  const classes=useStyles()
  const [Mobileopen, Setmobileopen] = useState(false);
  const handleDraweropen = () => {
    Setmobileopen(!Mobileopen);
  };

  const handleDrawerclose = () => {
    Setmobileopen(false);
  };
  return (
    <>
      <Navbar   handleDraweropen={ handleDraweropen} />
      <Sidebar  Mobileopen={Mobileopen}  handleDraweropen={ handleDraweropen} handleDrawerclose={handleDrawerclose} />
      <Box className={classes.wraping}>
      <Routes>
        <Route path="/" element={< Dashbord/>}/>
        <Route path="/blogpost" element={<Blogpost/>}/>
        <Route path="/link" element={<Links/>}/>
        <Route path="/notification" element={<Notification/>}/>
        <Route path="/logout" element={< Logout/>}/>
      </Routes>
      </Box>
      
    </>
  );
}
