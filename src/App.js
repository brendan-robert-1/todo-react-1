import React from 'react';
import TodoList from './TodoList';
import TodoButton from './TodoButton';
import TodoInput from './TodoInput';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      todo:'',
      todos:[]
    }
  }
  render(){
    return (
      <div className="App">
        <TodoInput
          type='text'
          placeholder='Enter new task...'
        />
        <TodoButton
        />
        <TodoList/>
      </div>
    );
  }
}

export default App;
