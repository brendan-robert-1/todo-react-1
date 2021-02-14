import React from 'react'
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
export default function Copyright() {
    const classes = useStyles();
    return(
        < div className={classes.copyright} >
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://github.com/brendan-robert-1">
                    Thenics Regiment
        </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
      </div >
    );
}

const useStyles = makeStyles((theme) => ({
    copyright: {
        margin: '50px'
    }
}));