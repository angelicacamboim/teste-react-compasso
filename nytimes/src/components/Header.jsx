import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/img/logo.jpg';
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import ButtonGroup from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  }
}));

export default function Header() {
  const classes = useStyles();
  const [selectedBtn, setSelectedBtn] = React.useState(0);

  return (
    <React.Fragment>
          <AppBar position="relative" color="default">
          <Toolbar>
          <Typography variant="h6" color="textPrimary" noWrap>
          The New York Times - Top Stories
          </Typography>
        </Toolbar>
      </AppBar>

    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        <Link to="/" onClick={()=>setSelectedBtn(0)}><img src={logo} width="300" alt="logo"/></Link>
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
        The Top Stories API returns an array of articles currently on the specified section (science, technology, ...).
        </Typography>
        <div className={classes.heroButtons}>
        <ButtonGroup>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button component={Link} value="Technology" variant="contained" to="/technology" color={selectedBtn === 1 ? "secondary" : "default"} onClick={()=>setSelectedBtn(1)}>
              Technology
              </Button>
            </Grid>
            <Grid item>
              <Button component={Link} value="Science" variant="contained" to="/science" color={selectedBtn === 2 ? "secondary" : "default"} onClick={()=>setSelectedBtn(2)}>
              Science
              </Button>
            </Grid>
          </Grid>
          </ButtonGroup>
        </div>
      </Container>
    </div>
    </React.Fragment>
  );
}


