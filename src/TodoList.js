import React from 'react';
import './TodoList.css';
import {List} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';

const TodoList = (props) =>  { 

  return (
      <List>
      {props.todos.map((item, index) => {
        return (
          
          <ListItem key={index} >
            <ListItemIcon>
            <Checkbox
              edge="start"
              checked={item.todos.isComplete}
              tabIndex={-1}
            />
          </ListItemIcon>
              <ListItemText primary={item.todos} />
          </ListItem>
        );
      })}
      </List>
  );
}

export default TodoList;
