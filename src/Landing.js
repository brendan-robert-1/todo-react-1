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
        display:'flex',
        backgroundColor:'white',
        height:'600px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },blockblack: {
        backgroundColor:'#080f17',
        height:'600px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },burger:{
        color:'#080f17'
    },whiteBlockItem:{
        color:'#080f17'
    },
    blackBlockItem:{
        color:'white'
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
                <div className={classes.blockblack}><div className={classes.blackBlockItem}><Typography variant="h3">Lose Weight</Typography></div></div>
                <div className={classes.blockwhite}><div className={classes.whiteBlockItem}><Typography variant="h3">Gain Muscle</Typography></div></div>
                <div className={classes.blockblack}><div className={classes.blackBlockItem}><Typography variant="h3">Learn New Skills</Typography></div></div>
            </div>);
    }
}
export default withStyles(styles, { withTheme: true })(Landing);
