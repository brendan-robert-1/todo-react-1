import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
const endpoint = process.env.REACT_APP_API_HOST;
const s3Endpoint = process.env.REACT_APP_S3_PREFACE;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      padding: '20px',
      paddingRight:'200px'
    },
  }
}));

const AddExercise = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    </div>
  );
}

export default AddExercise;
