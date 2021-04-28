import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import AuthButton from '../components/AuthButton';
import TaskEntry from '../components/TaskEntry';
import TaskList from '../components/TaskList';
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector, useDispatch} from 'react-redux';
import * as actionTypes from '../store/actions';
import {getAllTodosOrderedByDueDate} from '../store/selectors';

const Home = () => {
  const { isAuthenticated } = useAuth0();
  const taskList = useSelector(state => getAllTodosOrderedByDueDate(state));
  const dispatch = useDispatch();
  return (
    <div style={{backgroundColor: '#26A69A'}}>
      <AppBar position="static">
        <Toolbar>
          <AuthButton />
        </Toolbar>
      </AppBar>
      {isAuthenticated && (
        <>
          <br />
          <TaskEntry
            addTask={(taskname, dueDate, status) => dispatch(actionTypes.taskAdded(taskname, dueDate, status))}
          />
          <br/>
          <div style={{backgroundColor: '#e6ffff', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
            <TaskList
              taskList={taskList}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default Home;
