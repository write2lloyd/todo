import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import MarkAsDone from './MarkAsDone';
import * as actionTypes from '../store/actions'

interface Props {
  name: string,
  dueDate: string,
  quote: string,
  author: string,
  taskId: number,
  status: number,
}

const useStyles = makeStyles(theme => {
  return {
    root: {
      backgroundColor: theme.palette.secondary.main,
      marginBottom: theme.spacing(1),
    },
    delete: {
      backgroundColor: theme.palette.secondary.dark
    },
    doneTask: {
      textDecoration: 'line-through'
    },
    pendingTask: {
      textDecoration: 'normal'
    },
    quote: {
      color: 'black',
      fontStyle: 'italic',
      fontSize: 12,
    },
    dueDate: {
      color: 'black',
      fontStyle: 'bold',
      fontSize: 15,
    }
  }
});

const Task = (props: Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card elevation={0}>
      <CardContent className={classes.root}>
        <p className={props.status === 0 ? classes.pendingTask : classes.doneTask}>
          {props.name}
        </p>
        <p className={classes.dueDate}>
          Due: {moment(props.dueDate).format('dddd, MMMM Do YYYY')}
        </p>
        <p>
          <span className={classes.quote}>"{props.quote}" - {props.author}</span>
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