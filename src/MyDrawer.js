import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
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
  },
}));

const MyDrawer = (props) => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Drawer open={props.open} onClose={props.toggleDrawer(false)}>
        <List>
        <ListItem component={Link} to={'/'} button onClick={props.toggleDrawer(false)}>
            <ListItemText primary="Home"/>
          </ListItem>
          <Divider />
          <ListItem component={Link} to={'/todo'} button onClick={props.toggleDrawer(false)}>
              <ListItemText primary="Todo"/>
          </ListItem>
          <Divider />
          <ListItem component={Link} to={'/workout'} button onClick={props.toggleDrawer(false)}>
            <ListItemText primary="Workout"/>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default MyDrawer;
