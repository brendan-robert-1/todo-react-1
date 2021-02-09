import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CardContent, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    waveTop: {
        width: '100%',
        height: '500px',
        backgroundSize: 'cover',
        backgroundImage: `url(${'./media/wave.svg'})`,
        position: 'fixed',
        zIndex: "-1"
    }, wave1: {
        width: '100%',
        height: '500px',
        backgroundSize: 'cover',
        backgroundImage: `url(${'./media/wave1.svg'})`,
        position: 'fixed',
        zIndex: "-1"
    }, wave3: {
        width: '100%',
        height: '500px',
        backgroundSize: 'cover',
        backgroundImage: `url(${'./media/wave3.svg'})`,
        position: 'fixed',
        zIndex: "-1"
    }, wave4: {
        width: '100%',
        height: '500px',
        backgroundSize: 'cover',
        backgroundImage: `url(${'./media/wave4.svg'})`,
        position: 'fixed',
        zIndex: "-1"
    }, title: {
        color: 'white',
        zIndex: "9",
        positon: "relative",
        top: 0,
        paddingTop: '10px',
        paddingLeft: '20px'
    }, subtitle: {
        paddingLeft: '10px',
        paddingTop: '10px'
    }, login: {
        right: 0,
        top: 0,
        position: "fixed",
        padding: '20px'
    },gridroot:{
        flexGrow:1
    },paper: {
        height:500,
        width:300
    }
}));

export default function Landing() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.waveTop} />
            <div className={classes.wave1} />
            <div className={classes.wave3} />
            <div className={classes.wave4} />
            <div className={classes.title}>
                <Typography color="secondray" variant="h2">(Calis)-Thenics Regiment</Typography>
            </div>
            <div className={classes.login} >
                <Link style={{ textDecoration: 'none', paddingRight:'10px' }} to="/login"><Button
                    variant="contained"
                    color="white">Login
                </Button>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/register"><Button
                    variant="outlined"
                    color="secondary">Register
                </Button>
                </Link>
               
            </div>

            <div className={classes.gridroot}>
            <Grid
                container
                spacing={9}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={6}>
                        <Grid key={0} item>
                            <PaperCard classes={classes.paper} title="Lose Weight" paperColor="black"></PaperCard>
                        </Grid>
                        <Grid key={1} item>
                        <PaperCard classes={classes.paper} title="Gain Muscle" paperColor=""></PaperCard>
                        </Grid>
                        <Grid key={2} item>
                        <PaperCard classes={classes.paper} title="Learn Skills" paperColor=""></PaperCard>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </div>
            </div>
    );
}
const PaperCard = (props) =>{
    return(<Link style={{ textDecoration: 'none' }} to="/dashboard"><Paper className={props.classes} elevation={3}><Typography variant="h4">{props.title}</Typography></Paper></Link>);
}
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#4F000E',
        },
        secondary: {
            main: '#7ec1bf',
        },

    },
});
