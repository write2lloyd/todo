import React, { Component } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import Task from './components/Task';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions';

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
          textChanged={this.props.onTaskTextChanged}
          addTask={this.props.onTaskAdded}
          disableButton={this.props.disableAddTaskButton}
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
    taskList: state.taskList,
    disableAddTaskButton: state.disableAddTaskButton
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTaskTextChanged: (val) => dispatch(actionTypes.textChanged(val)),
    onTaskAdded: (taskname, status) => dispatch(actionTypes.taskAdded(taskname, status)),
    onTaskDelete: (id) => dispatch(actionTypes.taskDeleted(id)),
    onMarkAsDone: (id) => dispatch(actionTypes.taskMarkAsDone(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
