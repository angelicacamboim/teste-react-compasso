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
import TransitionsModal from './Modal'
import Grid from '@material-ui/core/Grid';

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

    const handleOpen = () => {
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
  <Grid container spacing={4}>
        { 
      posts.map((post) => (
        <Grid container item xs={4} spacing={-10}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={post.multimedia[0].url} 
          title={post.caption}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleOpen}>
          Learn More
        </Button>
        <TransitionsModal open={open} close={handleClose} post={post}/>
      </CardActions>
    </Card>

   </Grid>
     ))}
     </Grid>

    </React.Fragment>


  );
}

export default ListaNews
