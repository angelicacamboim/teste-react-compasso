import React from 'react'
import Container from '@material-ui/core/Container';
import ListaNews from '../components/ListaNews'
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const Home = () => {

  return (
     <Container maxWidth="lg">
     <Grid container spacing={5} >

     <Grid item xs={12}  lg={12}>
    <Typography variant="h6"component="h2" align="center" >

     NEWS
     </Typography>

     </Grid>

     <Grid item xs={12}>

     <ListaNews url={'us'}/>

     </Grid>

    </Grid>
    </Container>
  )
}

export default Home


  
   
  
