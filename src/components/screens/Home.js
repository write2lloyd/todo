import React from 'react';
import AuthButton from '../AuthButton';
import TaskEntry from '../TaskEntry';
import TaskList from '../TaskList';
import { useAuth0 } from "@auth0/auth0-react";
import { connect } from 'react-redux';
import { Divider } from '@material-ui/core';
import * as actionTypes from '../../store/actions';

const Home = (props) => {
  const { isAuthenticated } = useAuth0();
  return (
    <div style={{backgroundColor: '#26A69A'}}>
      <AuthButton />
      {isAuthenticated && (
        <>
          <TaskEntry
            addTask={props.onTaskAdded}
          />
          <br/>
          <Divider variant="middle" />
          <TaskList 
            taskList={props.taskList}
            deleteTask={props.onTaskDelete}
            doneTask = {props.onMarkAsDone}
          />
        </>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    taskList: state.taskList,
    disableAddTaskButton: state.disableAddTaskButton,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTaskAdded: (taskname, dueDate, status) => dispatch(actionTypes.taskAdded(taskname, dueDate, status)),
    onTaskDelete: (id) => dispatch(actionTypes.taskDeleted(id)),
    onMarkAsDone: (id) => dispatch(actionTypes.taskMarkAsDone(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
