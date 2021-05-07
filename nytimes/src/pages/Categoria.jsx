import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import ListaNews from '../components/ListaNews'
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    textCustom: {
        textTransform: 'uppercase',
        textAlign: 'center'
    },

}))

const Categoria = () => {
    const classes = useStyles();
    const {id} = useParams()
    
    return(
    <Container maxWidth="lg">
        <Grid container spacing={5} >

        <Grid item xs={12}  lg={12}>
        <Typography variant="h6"component="h2"  className={classes.textCustom}>

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