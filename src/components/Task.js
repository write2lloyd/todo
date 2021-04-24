import React from 'react';
import { Button, Card, CardContent } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import MarkAsDone from './MarkAsDone';
import * as actionTypes from '../store/actions'

const Task = (props) => {
  console.log('task props', props);
  const dispatch = useDispatch();
  return (
    <Card key={props.taskId}>
      <CardContent className="taskContainer">
        <p className="taskName">
          {props.name}
        </p>
        <p className="dueDate">
          Due: {moment(props.dueDate).format('dddd, MMMM Do YYYY')}
        </p>
        <p>
          <span className="quote">"{props.quote}" - {props.author}</span>
        </p>
        <Button variant="contained" color="secondary"
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