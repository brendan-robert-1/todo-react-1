import { makeStyles } from '@material-ui/core'
import React from 'react'
import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';

export default function BackToHome(){
    const classes = useStyles();
    return(
        <div>
            <Link to={{pathname: '/'}}><IconButton className={classes.backButton} color="primary" aria-label="upload picture" component="span">
          <ArrowBackIcon style={{fontSize:40}}/>
        </IconButton>
        </Link> 
        </div>
    );
}

const useStyles = makeStyles((theme) =>({
    backButton: {
      top:0,
      left:0,
    }
}));