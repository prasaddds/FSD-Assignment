import React, { Component } from 'react';

class Task extends Component {
  render() {
    const { task, onDelete } = this.props;
    return (
      <div className='task'>
        <h3>{task.text} <button onClick={() => onDelete(task.id)} style={{ color: 'red', marginLeft: '1rem' }}>Delete</button></h3>
      </div>
    );
  }
}

export default Task;