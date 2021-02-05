import React from 'react';
import TodoList from './TodoList';
import TodoButton from './TodoButton';
import TodoInput from './TodoInput';
import axios from 'axios';

const host = "159.89.51.220";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      todo:'',
      todos:[]
    }

  }
 
  componentDidMount(){
    axios.get(`http://`+host+`/todos`)
    .then(res => {
      const resJson = res.data;
      console.log(resJson.todos)
      this.setState({todos: resJson.todos})
    })
  }
  saveToDoListItem = toDoItem => {
    if(!toDoItem){
      return;
    }
    axios.post(`http://`+host+`/addtodo`, {
      todo: toDoItem
    });
    axios.get(`http://`+host+`/todos`)
    .then(res => {
      const resJson = res.data;
      console.log(resJson.todos)
      this.setState({todos: resJson.todos})
    })
  }
  setInputValue(val){
    this.setState({todo: val});
  }
  resetTodos(){
    axios.get(`http://`+host+`/reset`);
    axios.get(`http://`+host+`/todos`)
    .then(res => {
      const resJson = res.data;
      console.log(resJson.todos)
      this.setState({todos: resJson.todos})
    })
    this.setState({todos:[]});
  }
  render(){
    
    return (
      <div className="App">
        <h1>Global To-Do!</h1>
        <p>Click a task when completed</p>
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

export default App;
