import React, { Component } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import Task from './components/Task';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions';
import Spinner from './components/Spinner';
import { Divider } from '@material-ui/core';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      taskList: []
    }
  }

  render() {
    return(
      <div className="App">
        <Task 
          name={this.props.task}
          dueDate={this.props.dueDate}
          textChanged={this.props.onTaskTextChanged}
          dueDateChanged={this.props.onDueDateChanged}
          addTask={this.props.onTaskAdded}
          disableButton={this.props.disableAddTaskButton}
        />
        <Divider variant="middle" />
        <Spinner loading={this.props.loading} />
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
    dueDate: state.dueDate,
    taskList: state.taskList,
    disableAddTaskButton: state.disableAddTaskButton,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTaskTextChanged: (val) => dispatch(actionTypes.textChanged(val)),
    onDueDateChanged: (val) => dispatch(actionTypes.dueDateChanged(val)),
    onTaskAdded: (taskname, dueDate, status) => dispatch(actionTypes.taskAdded(taskname, dueDate, status)),
    onTaskDelete: (id) => dispatch(actionTypes.taskDeleted(id)),
    onMarkAsDone: (id) => dispatch(actionTypes.taskMarkAsDone(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
