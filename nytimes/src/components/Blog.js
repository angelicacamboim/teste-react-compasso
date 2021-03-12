import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Header';
import FeaturedPost from './FeaturedPost';
// import Footer from './Footer';
import api from '../services/api'

const sections = [
  { title: 'Technology'},
  { title: 'Science'},
];

 
export default function Blog() {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [title, setTitle] = useState('');

  let handleClick = (event) => {
    const titleLink = event.target.innerText

    api.get(titleLink + '.json')
      .then((response) => {
      setTitle(response.data.section)
     setFeaturedPosts(response.data.results);
     console.log(featuredPosts)
    })
}

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header sections={sections} title={handleClick}/>
        <h1>{title}</h1>
        <main>
          <Grid container spacing={4}>
            {featuredPosts.map((post, index) => (
              <FeaturedPost key={index} post={post} />
            ))}
          </Grid>
         
        </main>
      </Container>
    </React.Fragment>
  );
}