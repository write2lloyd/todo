import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import MarkAsDone from './MarkAsDone';
import * as actionTypes from '../store/actions'

const useStyles = makeStyles(theme => {
  return {
    root: {
      backgroundColor: theme.palette.secondary.main,
      padding: theme.spacing(1),
      margin: theme.spacing(1),
      borderRadius: theme.spacing(2),
    },
    delete: {
      backgroundColor: theme.palette.secondary.dark
    }
  }
});

const Task = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card key={props.taskId} >
      <CardContent className={classes.root}>
        <p className="taskName">
          {props.name}
        </p>
        <p className="dueDate">
          Due: {moment(props.dueDate).format('dddd, MMMM Do YYYY')}
        </p>
        <p>
          <span className="quote">"{props.quote}" - {props.author}</span>
        </p>
        <Button variant="contained" className={classes.delete}
          onClick={() => dispatch(actionTypes.taskDeleted(props.taskId))}>
          Delete
        </Button>
        &nbsp;
        <MarkAsDone
          status={props.status}
          label={(props.status === 0) ? 'Mark as done' : 'Mark as Pending'}
          markAsDone={() => dispatch(actionTypes.taskMarkAsDone(props.taskId))}
          markAsPending={() => dispatch(actionTypes.taskMarkAsPending(props.taskId))} 
        />
      </CardContent>
    </Card>
  );
}

export default Task;