import React, { Component } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import Task from './components/Task';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      taskList: []
    }
  }

  handleMarkAsDone = taskId => {
    const task = {
      ...this.state.taskList[taskId],
      status: 1
    }
    const taskList = [...this.state.taskList];
    taskList[taskId] = task;
    this.setState({taskList: taskList});
  }

  handleDelete = (taskId) => {
    const updatedTaskList = this.state.taskList.filter((_task, index) => {
      return index !== taskId;
    });
    this.setState((state) => ({
      taskList: updatedTaskList
    }));
  }

  handleClick = (task) => {
    console.log('inside handleClick', task);
    const newTask = {
      name: task,
      status: 0
    }
    this.setState((state) => ({
      taskList: state.taskList.concat(newTask)
    }));
  }

  handleChange = (val) => {
    this.setState({
      task: val
    });
  }
  render() {
    return(
      <div className="App">
        <Task 
          name={this.state.task}
          textChanged={this.handleChange}
          addTask={this.handleClick}
        />
        <hr/>
        <TaskList 
          taskList={this.state.taskList}
          deleteTask={this.handleDelete}
          doneTask = {this.handleMarkAsDone}
        />
      </div>
    )
  }
}

export default App;
