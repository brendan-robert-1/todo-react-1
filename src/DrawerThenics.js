import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';

const MyDrawer = (props) => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Drawer open={props.open} onClose={props.toggleDrawer(false)}>
        <List>
        <ListItem className={classes.listItem} component={Link} to={'/'} button onClick={props.toggleDrawer(false)}>
            <ListItemText classes={{primary:classes.listItemText}} primary="Home"/>
          </ListItem>
          <Divider />
          <ListItem className={classes.listItem} component={Link} to={'/workout'} button onClick={props.toggleDrawer(false)}>
            <ListItemText classes={{primary:classes.listItemText}} primary="Workouts"/>
          </ListItem>
          <Divider/>
          <ListItem className={classes.listItem} component={Link} to={'/view-exercises'} button onClick={props.toggleDrawer(false)}>
            <ListItemText classes={{primary:classes.listItemText}} primary="Build Routine"/>
          </ListItem>
          <Divider/>
          <ListItem className={classes.listItem} component={Link} to={'/add-exercise'} button onClick={props.toggleDrawer(false)}>
            <ListItemText classes={{primary:classes.listItemText}} primary="Create Exercises"/>
          </ListItem>
          <Divider/>
          <ListItem className={classes.listItem} component={Link} to={'/view-exercises'} button onClick={props.toggleDrawer(false)}>
            <ListItemText classes={{primary:classes.listItemText}} primary="View Exercises"/>
          </ListItem>
        </List>
        <div className={classes.bottomPush}>
          <List style={flexContainer}>
            <ListItem><Link href="https://github.com/brendan-robert-1"><GitHubIcon color="primary" style={{fontSize: 40}}></GitHubIcon></Link></ListItem>
            <ListItem><a href={"mailto: thenicsregiment@gmail.com"}><MailIcon color="primary" style={{fontSize: 40}}></MailIcon></a></ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  listItem: {
    paddingRight:30,
    paddingLeft:20

  },
  listItemText:{
    fontSize:'1.6em'
  },
  title: {
    flexGrow: 1,
  },bottomPush: {
    position:'absolute',
    bottom:0,
    width:'100%'
  }
}));
const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  padding: 0,
  justifyContent:'space-between',
  padding:15
};
export default MyDrawer;
