import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarSecondary: {
      justifyContent: 'center',
      overflowX: 'auto',
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
      textDecoration: 'none' 
    }
  }));
  

const ListaCategoria = () => {
const classes = useStyles();

  return (
      <React.Fragment>
    <Toolbar component="nav" variant="regular" className={classes.toolbarSecondary}>
            <Link to="/categoria/technology"
              color="inherit"
              variant="body2"
              className={classes.toolbarLink}
            >
                Tecnologia
            </Link>

            <Link to="/categoria/science"
              color="inherit"
              variant="body2"
              className={classes.toolbarLink}
            >
                Ciência
            </Link>
      </Toolbar>    
      </React.Fragment> 

  )
}

export default ListaCategoria


  
   
  
