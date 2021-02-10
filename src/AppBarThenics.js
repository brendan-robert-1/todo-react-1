import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import MyDrawer from './DrawerThenics';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },login: {

  }
}));

const AppBarThenics = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    drawerOpen: false,
    mobileView: false
  });
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState((prevState) => ({ ...prevState, drawerOpen: !state.drawerOpen }));
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton}edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer()}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Thenics Dashboard
          </Typography>
          <Button variant="outlined" className={classes.login} component={Link} to={'/login'} color="inherit">Login</Button>
        </Toolbar>

      </AppBar>
      <MyDrawer open={state.drawerOpen} toggleDrawer={toggleDrawer}></MyDrawer>
    </div>
  );
}
export default AppBarThenics;
