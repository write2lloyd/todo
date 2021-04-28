import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AuthButton from '../components/AuthButton';
import TaskEntry from '../components/TaskEntry';
import TaskList from '../components/TaskList';
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector, useDispatch} from 'react-redux';
import * as actionTypes from '../store/actions';
import {getAllTodosOrderedByDueDate} from '../store/selectors';

const useStyles = makeStyles(theme => {
  return {
    appbar: {
      backgroundColor: theme.palette.primary.dark,
      height: theme.spacing(8),
    },
    taskentry: {
      backgroundColor: theme.palette.primary.light
    }
  }
});

const Home = () => {
  const classes = useStyles();
  const { isAuthenticated } = useAuth0();
  const taskList = useSelector(state => getAllTodosOrderedByDueDate(state));
  const dispatch = useDispatch();
  return (
    <div>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <AuthButton />
        </Toolbar>
      </AppBar>
      {isAuthenticated && (
        <>
          <div className={classes.taskentry}>
            <br />
            <TaskEntry
              addTask={(taskname, dueDate, status) => dispatch(actionTypes.taskAdded(taskname, dueDate, status))}
            />
            <br/>
          </div>
          <div>
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
