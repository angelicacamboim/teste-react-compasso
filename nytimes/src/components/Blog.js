import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Header';
import FeaturedPost from './FeaturedPost';
// import Footer from './Footer';
import axios from 'axios';

const sections = [
  { title: 'Technology'},
  { title: 'Science'},
];

 
export default function Blog() {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [title, setTitle] = useState('');

  let handleClick = (event) => {
    const titleLink = event.target.innerText

    axios({
      method: 'get',
      baseURL: 'https://api.nytimes.com/svc/topstories/v2',
      url: titleLink + '.json',
      params: {
        'api-key': 'zvAazghKbJZP9pnADKTDoZ2uNJvQmGAL'
      }
    }).then((response) => {
      setTitle(response.data.section)
     const posts = response.data.results;
     setFeaturedPosts(posts);
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
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
         
        </main>
      </Container>
    </React.Fragment>
  );
}