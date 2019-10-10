import React, { Component } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import Task from './components/Task';
import { connect } from 'react-redux';

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
          name={this.props.task}
          textChanged={this.props.onTaskTextChanged}
          addTask={this.props.onTaskAdded}
        />
        <hr/>
        <TaskList 
          taskList={this.props.taskList}
          deleteTask={this.props.onTaskDelete}
          doneTask = {this.props.onMarkAsDone}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    task: state.task,
    taskList: state.taskList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTaskTextChanged: (val) => dispatch({ type: 'TEXT_CHANGED', changedText: val }),
    onTaskAdded: (taskname, status) => dispatch({ type: 'TASK_ADDED', task:{name: taskname, status: status} }),
    onTaskDelete: (id) => dispatch({ type: 'TASK_DELETED', taskId: id}),
    onMarkAsDone: (id) => dispatch({ type: 'TASK_MARKASDONE', taskId: id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
