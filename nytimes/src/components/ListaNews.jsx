import React, { useState, useEffect } from 'react'
import { get } from '../api/api'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TransitionsModal from './Modal'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
});

const ListaNews = ({url}) => {
    const classes = useStyles();
    const [ posts, setPosts ] = useState([])
    const [open, setOpen] = useState(false);
    const [ postModal, setPostModal ] = useState([])


    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    useEffect(() => {
        get(url, setPosts)
    }, [url])


  return (
    
    <React.Fragment>
  <Grid container spacing={1}>
        { 
      posts.map((post) => (
        <Grid container item xs={4} spacing={1} key={post.created_date}>
         
        <Card className={classes.root}>
      <CardActionArea onClick={()=>{
          handleClickOpen(); setPostModal(post)
        }}>
        <CardMedia 
          className={classes.media}
          image={post.multimedia[0].url} 
          title={post.caption}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {post.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

        <Button size="small" color="primary" onClick={()=>{
          handleClickOpen(); setPostModal(post)
        }}>
          Learn More
        </Button>
        
        </CardActions>
    </Card>
   </Grid>
   
     ))}
     </Grid>

     
    <TransitionsModal open={open} close={handleClose} post={postModal}/>      
   
    </React.Fragment>


  );
}

export default ListaNews
