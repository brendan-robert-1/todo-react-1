import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import FooterLanding from './FooterLanding';
import axios from 'axios'
import UserProfile from './auth/UserProfile'

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: 0,
            windowHeight: 0,
            drawerOpen: false,
            anchorHeader: false,
            bottomVideo:'',
            username: null
        };
        this.updateDimensions = this.updateDimensions.bind(this);
       
    }
    async componentDidMount() {
        this.updateDimensions();       
        window.addEventListener("resize", this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
    updateDimensions() {
        let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
        let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
        this.setState({ windowWidth, windowHeight });
        const small = windowWidth < 650;
        if(small){
            this.setState({bottomVideo:'https://thenicsregiment.nyc3.digitaloceanspaces.com/landing/SEQ2.mp4'})
        }else{
            this.setState({bottomVideo:'https://thenicsregiment.nyc3.digitaloceanspaces.com/landing/production%20ID_4367507.mp4'})
        }
    }
    toggleDrawer(value) {
          this.setState({drawerOpen:value})
        }
    render() {
        const { classes } = this.props;
        const { windowWidth } = this.state;
        const small = windowWidth < 650;
        return (
            <div>
                <AppBar className={classes.header} position="sticky">
                    <Toolbar>
                    <Typography className={classes.title} variant={small ? 'h6' : 'h6'}>
                        (Calis)-thenics Regiments
                    </Typography>
                    {small ? (
                        <div className={classes.buttons}>
                            <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu"
                             onClick={()=>this.toggleDrawer(true)}>
                                <MenuIcon className={classes.burger}/>
                            </IconButton>
                        </div>) : (
                        <div className={classes.buttons}>
                            {UserProfile.getUsername() && 
                                <Link to={{ pathname: '/dashboard' }} style={{ textDecoration: 'none' }}>
                                <Button color="primary" className={classes.button} 
                                    >{UserProfile.getUsername()}'s Dashboard</Button></Link>
                            }
                            <Link to={{ pathname: '/dashboard' }} style={{ textDecoration: 'none' }}>
                                <Button color="primary" className={classes.button} 
                                    >Progressions</Button></Link>
                            <Link to={{ pathname: '/dashboard' }} style={{ textDecoration: 'none' }}>
                                <Button color="primary" className={classes.button} 
                                    >Exercise Library</Button></Link>
                          
                            {UserProfile.getUsername() ? (
                                 <Button onClick={() => {
                                    console.log("logging out")
                                    axios.get(process.env.REACT_APP_API_HOST + "/users/logout")
                                    .then(res =>{
                                      console.log("log out response: " + JSON.stringify(res.data))
                                        console.log(UserProfile.getUsername())
                                        UserProfile.clear()
                                        this.props.history.push('/')
                                    })
                                    .catch(err => console.log(err))
                                  }} color="primary" className={classes.button} 
                                variant="contained">Log out</Button>
                            ) : (
                                <React.Fragment>
                                <Link to={{ pathname: '/login' }} style={{ textDecoration: 'none' }}>
                                <Button color="primary" className={classes.button} 
                                variant="contained">Login</Button></Link>
                                <Link to={{ pathname: '/register' }} style={{ textDecoration: 'none' }}>
                                <Button color="primary" className={classes.button} variant="outlined">Sign Up</Button></Link></React.Fragment>
                            )}                          
                        </div>)}
                    </Toolbar>
                    
                </AppBar>
                <Drawer open={this.state.drawerOpen} onClose={()=>this.toggleDrawer(false)} anchor="right">
                    <List>
                        <ListItem  component={Link} to={'/login'} button >
                            <ListItemText  primary="Login" />
                        </ListItem>
                        <Divider />
                        <ListItem  component={Link} to={'/register'} button >
                            <ListItemText primary="Register" />
                        </ListItem>
                        <ListItem  component={Link} to={'/dashboard'} button >
                            <ListItemText primary="Exercise Library" />
                        </ListItem>
                    </List>
                </Drawer>
                <Link to={{ pathname: '/dashboard' }} style={{ textDecoration: 'none' }}><div className={classes.videoContainer}>  
                    <div className={classes.videoBackground}>
                        <video className={classes.video} loop muted autoPlay><source src={'https://thenicsregiment.nyc3.digitaloceanspaces.com/landing/pexels-marko-ristic-61029821.mp4'} type="video/mp4" /></video>
                    </div>
                    <div className={classes.opaqueOverlay}></div>
                    <div className={classes.blackBlockItem}><Typography variant="h3">Learn new calisthenics skills.</Typography></div>
                 </div></Link>
                 <Link to={{ pathname: '/dashboard' }} style={{ textDecoration: 'none' }}><div className={classes.blockwhite}>
                    <div className={classes.whiteBlockItem}><Typography variant="h3">Build a workout routine.</Typography></div>
                    <Paper className={classes.gainMusclePaper}></Paper>
                    </div>
                    </Link>
                    <Link to={{ pathname: '/dashboard' }} style={{ textDecoration: 'none' }}><div className={classes.videoContainer}>  
                    <div className={classes.videoBackground}>
                        <video className={classes.video}  key={this.state.bottomVideo} loop muted autoPlay><source src={this.state.bottomVideo} type="video/mp4" /></video>
                    </div>
                    <div className={classes.opaqueOverlay}></div>
                    <div className={classes.blackBlockItem}><Typography variant="h3">Browse the exercise library.</Typography></div>
                 </div></Link>
                <FooterLanding windowWidth={windowWidth}></FooterLanding>
            </div>);
    }
}
const styles = theme => ({
    root: {
        flexGrow: 1
    },
    header: {
        flexGrow:1,
        backgroundColor:'white',
    }, buttons: {
        alignItems:'center'
    }, button: {
        margin: '5px'
    },authButtons:{
       alignItems:'flex-end' 
    }, title:{
        color:'#080f17',
        flexGrow:1
    },blockwhite: {
        height:'600px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
    
    },blockblack: {
        height:'600px',
        display:'flex',
        background: "#080f17",
        justifyContent:'center',
        alignItems:'center',
        position:'relative'
    },burger:{
        color:'#080f17'
    },whiteBlockItem:{
        color:'#080f17',
        zIndex:2,
        marginLeft:'20px'
    },
    blackBlockItem:{
        color:'white',
        marginLeft:'20px',
    },
    videoContainer:{
        display:'flex',
        height:'600px',
        position:'relative',
        justifyContent:'center',
        alignItems:'center'
    },
    videoBackground: {
       position:'absolute',
       top:0,
       left:0,
       right:0,
       bottom:0,
       overflow:'hidden',
       zIndex:-2
    },opaqueOverlay: {
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        backgroundColor:'black',
        opacity:'0.7',
        zIndex:-1
    }
});
export default withRouter(withStyles(styles, { withTheme: true })(Landing));
