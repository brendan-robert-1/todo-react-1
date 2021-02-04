import React from 'react';
import TodoList from './TodoList';
import TodoButton from './TodoButton';
import TodoInput from './TodoInput';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      todo:'',
      todos:['eat','sleep','game']
    }
  }
  saveToDoListItem = toDoItem => {
    if(!toDoItem){
      return;
    }
    this.setState({
      todos: [...this.state.todos, this.state.todo],
      todo:''
    });
  }
  setInputValue(val){
    this.setState({todo: val});
  }
  resetTodos(){
    this.setState({todos:[]});
  }
  render(){
    return (
      <div className="App">
        <h1>To Do App</h1>
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
