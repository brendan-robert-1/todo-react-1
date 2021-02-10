import React from 'react';
import { withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CardContent, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import { TransitionGroup  } from 'react-transition-group' 
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
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
    },title:{
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
        zIndex:2
    },
    blackBlockItem:{
        color:'white'
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
    },
    video:{
        width:'100%'
    }
});
class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: 0,
            windowHeight: 0,
            drawerOpen: false,
            anchorHeader: false,
        };
        this.updateDimensions = this.updateDimensions.bind(this);
        this.scroll = this.scroll.bind(this);
    }
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
        window.addEventListener("scroll", this.scroll);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
    updateDimensions() {
        let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
        let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

        this.setState({ windowWidth, windowHeight });
    }
    scroll(){
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrolled = winScroll / height
        if(scrolled > .3){
            console.log('anchoring')
            this.setState({
                anchorHeader: true
            })
        }else {
            this.setState({
                anchorHeader: false
            })
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
                            <Link to={{ pathname: '/dashboard' }} style={{ textDecoration: 'none' }}>
                                <Button color="primary" className={classes.button} 
                                    variant="contained">Exercise Library</Button></Link>
                            <Link to={{ pathname: '/login' }} style={{ textDecoration: 'none' }}>
                                <Button color="primary" className={classes.button} 
                                    variant="contained">Login</Button></Link>
                            <Link to={{ pathname: '/register' }} style={{ textDecoration: 'none' }}>
                                <Button color="primary" className={classes.button} variant="contained">Sign Up</Button></Link>
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
                        <video className={classes.video} loop muted autoPlay><source src={'https://thenicsregiment.nyc3.digitaloceanspaces.com/landing/production%20ID_4367507.mp4'} type="video/mp4" /></video>
                    </div>
                    <div className={classes.opaqueOverlay}></div>
                    <div className={classes.blackBlockItem}><Typography variant="h3">Browse the exercise library.</Typography></div>
                 </div></Link>
          
            </div>);
    }
}
export default withStyles(styles, { withTheme: true })(Landing);
