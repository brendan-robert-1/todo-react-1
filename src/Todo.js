import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import TodoList from './TodoList';
import TodoButton from './TodoButton';
import TodoInput from './TodoInput';

import Typography from '@material-ui/core/Typography';
const endpoint = process.env.REACT_APP_API_HOST;
const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 500,
    },
  });

  
class Todo extends React.Component {
    constructor(props){
        super(props);
        this.state= {
          todo:'',
          todos:[]
        }
      }
      componentDidMount(){
        console.log('endpoint: ' + endpoint)
        axios.get(endpoint + `/todos`)
        .then(res => {
          const resJson = res.data;
          console.log(resJson.todos)
          this.setState({todos: resJson.todos})
        })
      }
      saveToDoListItem = toDoItem => {
        console.log('todo item: ' + toDoItem)
        if(!toDoItem){
          return;
        }
        axios.post(endpoint + `/addtodo`, {
          todo: toDoItem
        })
        .then(this.setState({
          todos: this.state.todos.concat({todos:toDoItem}),
          todo:''
        }))
      }
      setInputValue(val){
        this.setState({todo: val});
      }
      resetTodos(){
        console.log('resetting...')
        axios.get(endpoint + `/reset`);
        this.setState({todos:[]});
      }
      render(){
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                <Typography variant="h4">Global To-Do!</Typography >
                <Typography variant="subtitle1">Click a task when completed</Typography>
                <TodoInput
                    type='text'
                    placeholder='Enter new task...'
                    value={this.state.todo}
                    onChange={(val) => this.setInputValue(val)}
                />
                <TodoButton
                    text='Add task'
                    onClick={() => this.saveToDoListItem(this.state.todo)}  
                />
                <TodoList
                    todos={this.state.todos}
                />
                <TodoButton
                    text='Reset tasks'
                    onClick={() => this.resetTodos()}
                />
            </div>
        );
      }
}
export default withStyles(styles, { withTheme: true })(Todo);
 