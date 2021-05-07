import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import image from '../assets/img/logo.jpg'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
import ListaCategorias from './ListaCategorias'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  }
  
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="lg">
      <Toolbar className={classes.toolbar}>
      <Grid container spacing={6}>

      <Grid item xs>
   
      <Link to="/">
        <img
						className="cabecalho__logo"
						src={image}
						width="180px"
						alt="Logo"
					/>
        </Link>

        </Grid>
          <Grid item xs={4}>

          <ListaCategorias/>
    
        </Grid>
        </Grid>
      </Toolbar>
      </Container>
      </React.Fragment>

     
  );
}
