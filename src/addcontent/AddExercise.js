import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
