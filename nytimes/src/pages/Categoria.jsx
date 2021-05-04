import React from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'
import ListaCategorias from '../components/ListaCategorias'
import Container from '@material-ui/core/Container';
import ListaNews from '../components/ListaNews'
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    textCustom: {
        textTransform: 'uppercase'    },

}))

const Categoria = () => {
    const classes = useStyles();

    const {id} = useParams()
    const {url ,path} = useRouteMatch()
    
    return(
    <Container maxWidth="lg">
        <ListaCategorias/>
        <Grid container spacing={6}>

        <Grid item xs={12}>
        <Typography variant="h5"component="h2" className={classes.textCustom}>

        {id}
        </Typography>
        </Grid>

        <Grid item xs={12}>

        <ListaNews url={id}/>

        </Grid>

    </Grid>

    </Container>
       
    )}

export default Categoria