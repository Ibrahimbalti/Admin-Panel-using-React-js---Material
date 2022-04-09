import React from "react";
import { Avatar, Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core";

export default function ListComponent({post}) {
    
  return (
    <Box>
      <Grid container>
       {/* author */}
        <Grid item xs={12} sm={6} md={5}></Grid>

            {/* Get post */}
        <Grid item xs={12} sm={6} md={5}>
            <List>
                {post.map((item,i)=>
                <ListItem key={i}>
                <ListItemIcon>
                    <Avatar src={item.image} alt={item.text}></Avatar>
                </ListItemIcon>
                <ListItemText>
                    <Typography variant="h6">{item.text}</Typography>
                </ListItemText>
            </ListItem>
            )}
               
            </List>
        </Grid>
      </Grid>
    </Box>
  );
}
