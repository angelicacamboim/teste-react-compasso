import React, { useState, useEffect } from 'react'
import { get } from '../api/api'

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';


const useStyles = makeStyles({
    card: {
      display: 'flex',
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 160,
    },
  });


const ListaNews = ({url}) => {
    const classes = useStyles();

    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        get(url, setPosts)
    }, [url])


  return (
    <React.Fragment>
      <Grid container spacing={3}>

  
        {
           posts.map((post) => (
            <Grid container item xs={6} spacing={1}>

                <CardActionArea component="a" key={post.created_date}>
                <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {post.title}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {post.published_date}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        {post.abstract}
                      </Typography>
                      <Typography variant="subtitle1" color="primary">
                        Continue reading...
                      </Typography>
                    </CardContent>
                  </div>
                  <Hidden xsDown>
                    <CardMedia className={classes.cardMedia} image={post.multimedia[0].url} title={post.caption} />
                  </Hidden>
                </Card>
              </CardActionArea>

              </Grid>
             
            )) }
     
     </Grid>

    </React.Fragment>


  );
}

ListaNews.propTypes = {
  post: PropTypes.object,
};

export default ListaNews
