import React, { useState,useEffect } from "react";
import { Box, Card, CardContent, Grid, Typography } from "@material-ui/core";
import { GeneralGraphComponent } from "../../common/GraphComponent";
import { useStyles } from "../BodyStyle";
import { FakeArrayDataGenerator } from "../../../utill/FakeArrayDataGenerator";
import { blue, red } from "@material-ui/core/colors";

export const UserviewComponent = () => {
  const classes = useStyles();
  const [fetch, setFetch] = useState(false);
  const GraphData = [
    {
      id: "userGraph",
      type: "line",
      dataset: [
        {
          label: "Current Month",
          data: FakeArrayDataGenerator({ count: 30, digit: 100 }),
          backgroundColor: "rgba(21,101,192,0.6)",
          borderColor: blue["A200"],
          fill: true,
          tension: 0.5,
        },
        {
          label: "Last Month",
          data: FakeArrayDataGenerator({ count: 30, digit: 100 }),
          backgroundColor: "rgba(198,40,40,0.6)",
          borderColor: red["A200"],
          fill: true,
          tension: 0.5,
        },
      ],
      xAxiselabel: ["week1", "week2", "week3", "week4", "week1"],
    },

    {
      id: "userPieGrahp",
      type: "pie",
      dataset: [
        {
          label: "Current Month",
          data: FakeArrayDataGenerator({ count: 3, digit: 1000 }),
          backgroundColor: [blue[100], blue[200], blue[300]],
          borderColor: blue["A200"],
          fill: true,
          tension: 0.5,
        },
      ],
      xAxiselabel: ["Desktop", "Mobile", "Template"],
    },
  ];
  useEffect(() => {
    if(!fetch){
      GraphData.map((item) =>
      GeneralGraphComponent({
        id: item.id,
        type: item.type,
        dataset: item.dataset,
        xAxiselabel: item.xAxiselabel,
      })
    );
    setFetch(true)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[fetch]);

  return (
    <Box className={classes.section}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={7}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h6">
                User Overview
              </Typography>
            </CardContent>
            <CardContent>
              <canvas
                id="userGraph"
                className={classes.DisplayuserGraph}
              ></canvas>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={5}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h6">
                Device Overview
              </Typography>
            </CardContent>
            <CardContent>
              <canvas
                id="userPieGrahp"
                className={classes.DisplayuserGraph}
              ></canvas>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
