import React from 'react';
import './TodoList.css';

class TodoList extends React.Component {
  crossOut = event =>{
    const element = event.target;
    element.classList.toggle("crossed-line");
  }
  render(){
    return (
      <div className="TodoList">
        <ul>
        {this.props.todos.map((item, index) => {
          return (
            <li onClick={this.crossOut} key={index}>
              {item.todo}
            </li>
          );
        })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
