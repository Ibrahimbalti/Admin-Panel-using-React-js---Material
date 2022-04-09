import React, { Fragment, useEffect, useState } from "react";
import { RandvalueGenerator } from "../../../utill/FakeArrayDataGenerator";
import { FakeArrayDataGenerator } from "../../../utill/FakeArrayDataGenerator";
import ListComponent from "./ListComponent";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";
import {
  amber,
  blue,
  green,
  indigo,
  lightGreen,
  red,
} from "@material-ui/core/colors";
import { PageHeader } from "../../common/CommonCompnents";
import { useStyles } from "../BodyStyle";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { DisplayGraphCard } from "../../common/GraphComponent";
import { UserviewComponent } from "./UserviewComponent";
import { GetPost } from "../../../utill/BloguserPost";
export default function Dashbord() {
  const classes = useStyles();
  const [post, setPost] = useState([]);
  const [fetch, setFetch] = useState(false);

  const DisplayData = [
    {
      label: "Post",
      value: RandvalueGenerator({ digit: 1000 }),
      icon: <ArrowDropUpIcon />,
      iconLabel: "4%",
    },
    {
      label: "Pages",
      value: RandvalueGenerator({ digit: 100 }),
      icon: <ArrowDropUpIcon />,
      iconLabel: "9%",
    },
    {
      label: "New visitor",
      value: RandvalueGenerator({ digit: 100 }),
      icon: <ArrowDropDownIcon />,
      iconLabel: "23%",
    },
    {
      label: "Total visitor",
      value: RandvalueGenerator({ digit: 1000 }),
      icon: <ArrowDropDownIcon />,
      iconLabel: "30%",
    },
  ];

  const GraphCardData = [
    {
      id: "Post",
      data: FakeArrayDataGenerator({ count: 9, digit: 100 }),
      brColor: blue[500],
      bgColor: blue[50],
    },
    {
      id: "Pages",
      data: FakeArrayDataGenerator({ count: 9, digit: 100 }),
      brColor: indigo[500],
      bgColor: indigo[50],
    },
    {
      id: "New visitor",
      data: FakeArrayDataGenerator({ count: 9, digit: 100 }),
      brColor: lightGreen[500],
      bgColor: lightGreen[50],
    },
    {
      id: "Total visitor",
      data: FakeArrayDataGenerator({ count: 9, digit: 100 }),
      brColor: amber[500],
      bgColor: amber[50],
    },
  ];

  useEffect(() => {
    if (!fetch) {
      GraphCardData.map((item) => 
      
        DisplayGraphCard({
          id: item.id,
          data: item.data,
          brColor: item.brColor,
          bgColor: item.bgColor,
        })
      )
      setFetch(true);
    }
  }, [fetch]);

  // Calling the post api
  useEffect(() => {
    if(!fetch)
    {
      GetPost({ limit: 5 }).then(({ data: { data } }) => {
        setPost(data);
      });
      setFetch(true)
    }
   
  },[fetch]);

  // const getPost=async()=>{
  //   try {
  //     const response= await axios.get('https://dummyapi.io/data/v1/post')
  //     console.log("data",response.data)
  //   } catch (error) {
  //     console.log("erro rorrr")
  //   }
  //     }

  return (
    <Box>
      <PageHeader label="Dashboard" pageTitle="Blog Overview" />
      <Grid container spacing={1}>
        {DisplayData.map((item, i) => (
          <Grid item xs={6} sm={3} key={i}>
            <Card style={{ marginTop: "20px" }}>
              <CardContent className={classes.cardContent}>
                <canvas
                  id={item.label}
                  className={classes.DisplayCardGraph}
                ></canvas>
                <Typography variant="body2" className={classes.cardLabel}>
                  {item.label}
                </Typography>
                <Typography
                  variant="h5"
                  component="h6"
                  className={classes.cardTitle}
                >
                  {item.value}
                </Typography>

                <Typography
                  style={{ textAlign: "center", marginBottom: "0px" }}
                  component="p"
                >
                  <Button
                    className={classes.ratioBtn}
                    startIcon={item.icon}
                    size="small"
                    style={{
                      color: item.label[0] === "P" ? green[600] : red[500],
                    }}
                  >
                    {item.iconLabel}
                  </Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <UserviewComponent />
      <ListComponent post={post}/>
    </Box>
  );
}
