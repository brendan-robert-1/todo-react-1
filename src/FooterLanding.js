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
        flexDirection:'row'
    },footerBox:{
        margin:'30px',
        color:'white',
        alignItems:'flex-start',
        flexDirection:'row'
    },icon:{
        margin:'10px'
    },iconContainer:{
        display:'flex',
        flexDirection:'row'
    }
  }));

export default function FooterLanding(props){
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <div className={classes.footerBox}>
                <Typography variant="h6">Contact Information</Typography>
                <Typography variant="body1">thenicsregiment@gmail.com</Typography>
                <Typography variant="body1">555.555.5555</Typography>
                <div className={classes.iconContainer}>
                    <div className={classes.icon}><Link href="https://github.com/brendan-robert-1"><GitHubIcon style={{fontSize:30}} color="secondary"></GitHubIcon></Link></div>
                    <div className={classes.icon}><Link href="https://twitter.com/brendanrobert3"><TwitterIcon style={{fontSize:30}} color="secondary" ></TwitterIcon></Link></div>
                </div>
                
            
            </div>
           
        </div>
    )
}