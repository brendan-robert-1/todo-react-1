import React from 'react';
import {Button} from '@material-ui/core';
import{makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const TodoButton = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant="contained" color = "primary" onClick={() =>props.onClick()}>
        {props.text}
      </Button>
    </div>
  );
}

export default TodoButton;
