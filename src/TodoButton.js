import React from 'react';

class TodoButton extends React.Component {
  render(){
    return (
      <div className="TodoButton">
        <button onClick={this.props.onClick()}>
          {this.props.text}
        </button>
      </div>
    );
  }
}

export default TodoButton;
