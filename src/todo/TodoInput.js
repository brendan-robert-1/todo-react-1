import React from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const TodoInput = (props) => {
  const classes = useStyles();
    return (
      <form className={classes.root}>
        <TextField className
          type={props.type}
          value={props.value}
          placeholder={props.placeholder}
          onChange={(e) => props.onChange(e.target.value)}>
        </TextField>
      </form>
    );
}

export default TodoInput;
