import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AuthButton from '../components/AuthButton';
import TaskEntry from '../components/TaskEntry';
import TaskList from '../components/TaskList';
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector, useDispatch } from 'react-redux';
import * as actionTypes from '../store/actions';
import { getAllTodosOrderedByDueDate } from '../store/selectors';
import UserInfo from '../components/UserInfo';
import Footer from '../components/Footer';

const useStyles = makeStyles(theme => {
  return {
    appbar: {
      backgroundColor: theme.palette.primary.dark,
      height: theme.spacing(8),
    },
  }
});

const Home = () => {
  const classes = useStyles();
  const { isAuthenticated, user } = useAuth0();
  console.log('user in home', user);
  const taskList = useSelector(state => getAllTodosOrderedByDueDate(state));
  const dispatch = useDispatch();
  return (
    <div>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          {isAuthenticated && <UserInfo {...user} />}
          <AuthButton />
        </Toolbar>
      </AppBar>
      {isAuthenticated && (
        <>
          <TaskEntry addTask={(taskname: string, dueDate: string, status: number) => dispatch(actionTypes.taskAdded(taskname, dueDate, status))} /> 
          <TaskList taskList={taskList} />
        </>
      )}
      <Footer />
    </div>
  )
}

export default Home;
