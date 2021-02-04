import React from 'react';

class TodoInput extends React.Component {
  render(){
    return (
      <div className="TodoInput">
      <input 
         type={this.props.type}
         value={this.props.value}
         placeholder={this.props.placeholder}
         onChange={(e) => this.props.onChange(e.target.value)}>
      </input>
     </div>
    );
  };
 
}

export default TodoInput;
