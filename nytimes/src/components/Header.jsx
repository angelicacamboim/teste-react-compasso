import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import image from '../assets/img/logo_nytimes.png'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <header>
      <Container maxWidth="lg">
      <Toolbar className={classes.toolbar}>
        <Button href="/" size="small">Home </Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          className={classes.toolbarTitle}
        >
        <img className="cabecalho__logo" src={image} width='400px' alt="Logo"/>
        </Typography>
     
      </Toolbar>
           </Container>
    </header>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};