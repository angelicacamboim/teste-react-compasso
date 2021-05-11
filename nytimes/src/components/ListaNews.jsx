import React, { useState, useEffect } from 'react'
import { get } from '../api/api'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TransitionsModal from './Modal'
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
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
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  loading: {
    justifyContent: 'center'
  }
}))

const ListaNews = ({url}) => {
    const classes = useStyles();
    const [ posts, setPosts ] = useState([])
    const [ open, setOpen ] = useState(false);
    const [ postModal, setPostModal ] = useState([])
    const [ loading, setLoading ] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    useEffect(() => {
        get(url, setPosts, setLoading)
    }, [url])


  return (
    <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
          { loading? 
            posts.map((post) => (

              <Grid item key={post.created_date} xs={12} sm={6} md={4}>
                <Card className={classes.card} onClick={()=>{
                  handleClickOpen(); setPostModal(post)
                }}>
                  <CardMedia
                    className={classes.media}
                    image={post.multimedia[0].url} 
                    title={post.caption}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {post.title}
                    </Typography>
                    <Typography>
                      {post.byline}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={()=>{
              handleClickOpen(); setPostModal(post)
           }}>
                      View
                  </Button>
                  </CardActions>
                </Card>
              </Grid>
            )) : <CircularProgress color="secondary" className={classes.loading}/> }
          <TransitionsModal open={open} close={handleClose} post={postModal}/>    

          </Grid>
        </Container>
  )
}

export default ListaNews
