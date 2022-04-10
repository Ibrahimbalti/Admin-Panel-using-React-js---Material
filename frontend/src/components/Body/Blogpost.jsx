import React, { useEffect, useState } from 'react'
import { Box, Card, Grid, List,ListItemText,Typography,ListItem,ListItemIcon,Avatar, Button,CardActions, CircularProgress } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';
import {PageHeader } from '../common/CommonCompnents'
import {GetUser,GetPost} from '.././../utill/BloguserPost'
import { useStyles } from './BodyStyle'
export default function Blogpost() {
  const classes=useStyles()
  const [post,setPost]=useState([])
  const[author,setAuthor]=useState([])
  const [fetch,setFetch]=useState(false)

  useEffect(() => {
    if (!fetch) {
      GetPost({ limit: 5 }).then(({ data: { data } }) => {
        setPost(data);
      });
      setFetch(true);

      GetUser({ limit: 5 }).then(({ data: { data } }) => {
        setAuthor(data);
      });
      setFetch(true);
    }
  }, [fetch]);

  return (
   <Box>
     <PageHeader label="post" pageTitle="Blog Post"/>
     <Grid container spacing={1} >
       {post.length === 0 ? <Box className={classes.CenterPrograssbar}>
         <CircularProgress/>
       </Box> : post.map((item,i)=>
       <Grid item xs={12} sm={4} key={i}>
       <Card style={{marginTop:"20px"}}>
         <List>
         <ListItem >
                  <ListItemIcon>
                    <Avatar src={item.owner.picture} alt={item.owner.text}></Avatar>
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="body1" component="h6">
                      {item.owner.firstName}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      {item.owner.title}
                    </Typography>
                  </ListItemText>
                </ListItem>
         </List>

         <img src={item.image} alt={item.id}  style={{width:"100%",height:"200px"}}/>

         <CardActions>
         <Button color="secondary" size="small">
          <FavoriteIcon /><span style={{marginLeft:"5px"}}>{item.likes}</span>
        </Button>
         </CardActions>
       </Card>
     </Grid>
       
       )}
       
     </Grid>
   </Box>
  )
}
