import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { useStyles } from "../Body/BodyStyle";

export const PageHeader = ({ label, pageTitle }) => {
  const classes = useStyles();

  return (
    <>
      {/* ............Row............... */}
      <Grid>
        {/* ...........Columns............... */}
        <Grid item xs={12} sm={12}>
          <Typography variant="body2" className={classes.pageSubtitle}>
            {label}
          </Typography>
          <Typography variant="h5" className={classes.pageTitle}>
            {pageTitle}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
