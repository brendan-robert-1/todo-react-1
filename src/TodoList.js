import React from 'react';
import './TodoList.css';

class TodoList extends React.Component {
  crossOut(){
    
  }
  render(){
    return (
      <div className="TodoList">
        <ul>
        {this.props.todos.map((item, index) => {
          return (
            <li onClick={this.crossLine} key={index}>
              {item}
            </li>
          );
        })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
