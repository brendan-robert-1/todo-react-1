import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
const useStyles = makeStyles((theme) => ({
    footer:{
        height:'200px',
        display:'flex',
        background: "#080f17",
        justifyContent:'space-between',
        position:'relative',
    },footerBoxRow:{
        margin:'30px',
        color:'white',
        display:'flex',
        flexDirection:'row'
    },footerBoxColumn:{
        margin:'30px',
        color:'white',
        display:'flex',
        flexDirection:'column'
    },icon:{
        padding:'20px'
    }
  }));

export default function FooterLanding(){
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <div className={classes.footerBoxColumn}>
                <Typography variant="h5">Contact Information</Typography>
                <Typography variant="body1">thenicsregiment@gmail.com</Typography>
                <Typography variant="body1">555.555.5555</Typography>
            </div>
            <div className={classes.footerBoxRow}>
                <div className={classes.icon}><Link href="https://github.com/brendan-robert-1"><GitHubIcon style={{fontSize:50}} color="secondary"></GitHubIcon></Link></div>
                <div className={classes.icon}><Link href="https://twitter.com/brendanrobert3"><TwitterIcon style={{fontSize:50}} color="secondary" ></TwitterIcon></Link></div>
            </div>
        </div>
    )
}