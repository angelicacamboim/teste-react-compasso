import React, { useState, useEffect } from 'react'
import api from '../api/api'
import { useHistory } from 'react-router-dom'

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
    paddingTop: '56.25%', 
  },
  cardContent: {
    flexGrow: 1,
  }
}))

const ListaNews = ({url}) => {
    let history = useHistory()
    const classes = useStyles()
    const [ posts, setPosts ] = useState([])
    const [ openModal, setOpenModal ] = useState(false);
    const [ postModal, setPostModal ] = useState([])
    const [ loading, setLoading ] = useState(true)

    const handleClickOpenModal = () => {
      setOpenModal(true);
    };
  
    const handleCloseModal = () => {
      setOpenModal(false);
    };

    useEffect(() => {
      api.get(url + '.json')
        .then(response => {
          setLoading(false)
          setPosts(response.data.results)
    }).catch(error =>  {
        console.log(error)
        history.push('/')
    })
  }, [url, history])

  return (
    <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
          { !loading?
            posts.map((post, index) => (

              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card} onClick={()=>{
                  handleClickOpenModal(); setPostModal(post)
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
                      handleClickOpenModal(); setPostModal(post)
                  }}>
                      View
                  </Button>
                  </CardActions>
                </Card>
              </Grid>
            )):<Grid item container direction="row" justify="center" alignItems="center"> 
            <CircularProgress color="secondary"/> 
          </Grid> }
          <TransitionsModal open={openModal} close={handleCloseModal} post={postModal}/>    

          </Grid>
        </Container>
  )
}

export default ListaNews
