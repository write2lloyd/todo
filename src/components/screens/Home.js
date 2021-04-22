import React from 'react';
import AuthButton from '../AuthButton';
import TaskEntry from '../TaskEntry';
import TaskList from '../TaskList';
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector, useDispatch} from 'react-redux';
import { Divider } from '@material-ui/core';
import * as actionTypes from '../../store/actions';
import {getAllTodosOrderedByDueDate} from '../../store/selectors';

const Home = () => {
  const { isAuthenticated } = useAuth0();
  const taskList = useSelector(state => getAllTodosOrderedByDueDate(state));
  const dispatch = useDispatch();
  return (
    <div style={{backgroundColor: '#26A69A'}}>
      <AuthButton />
      {isAuthenticated && (
        <>
          <TaskEntry
            addTask={(taskname, dueDate, status) => dispatch(actionTypes.taskAdded(taskname, dueDate, status))}
          />
          <br/>
          <Divider variant="middle" />
          <TaskList 
            taskList={taskList}
            deleteTask={(id) => dispatch(actionTypes.taskDeleted(id))}
            doneTask = {(id) => dispatch(actionTypes.taskMarkAsDone(id))}
          />
        </>
      )}
    </div>
  )
}

export default Home;
