import React from "react";
import {
  Avatar,
  Box,
  CircularProgress,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import { useStyles } from "../BodyStyle";
export default function ListComponent({ post, author }) {
  const classes = useStyles();
  return (
    <Box style={{backgroundColor:'#efefef'}} className={classes.section}>
      <Grid container spacing={2} >
        {/* author */}

        <Grid item xs={12} sm={6} md={5}>
          <Paper >
            <List>
              <ListItem>
                {" "}
                <Typography variant="h6">Top Author</Typography>{" "}
              </ListItem>
              <Divider />
              {author.length === 0 ? (
                <Box className={classes.CenterPrograssbar}>
                  <CircularProgress />
                </Box>
              ) : (
                author.map((item, i) => (
                  <ListItem key={i}>
                    <ListItemIcon>
                      <Avatar src={item.picture} alt={item.text}></Avatar>
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body1" component="h6">
                        {item.firstName}
                      </Typography>
                      <Typography variant="subtitle2" color="textSecondary">
                        {item.title}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                ))
              )}
            </List>
          </Paper>
        </Grid>

        {/* Get post */}
        <Grid item xs={12} sm={6} md={7}>
          <Paper>
            <List>
              <ListItem>
                {" "}
                <Typography variant="h6">Latest Post</Typography>{" "}
              </ListItem>
              <Divider />
              {post.length === 0 ? (
                <Box className={classes.CenterPrograssbar}>
                  <CircularProgress />
                </Box>
              ) : (
                post.map((item, i) => (
                  <ListItem key={i}>
                    <ListItemIcon>
                      <Avatar src={item.image} alt={item.text}></Avatar>
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="body1" component="h6">
                        {item.text}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                ))
              )}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
