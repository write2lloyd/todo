import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Card, CardContent } from '@material-ui/core';
import moment from 'moment';
import * as actionTypes from '../store/actions';
import './TaskList.css';
import MarkAsDone from './MarkAsDone';

const TaskList = (props) => {
    const list = props.taskList;
    console.table(list);
    const dispatch = useDispatch();
    const _task = (task, index) => {
        return (
            <Card key={index}>
              <CardContent className="taskContainer">
                <div>
                    <p className="taskName">
                      {taskName(task)}
                    </p>
                    <p className="dueDate">
                      Due: {moment(task.dueDate).format('dddd, MMMM Do YYYY')}
                    </p>
                    <p>
                      <span className="quote">"{task.quote.content}" - {task.quote.author}</span>
                    </p>
                    <Button variant="contained" color="secondary" 
                      onClick = {() => dispatch(actionTypes.taskDeleted(index))}>
                      Delete
                    </Button>
                    &nbsp;
                    <MarkAsDone
                        status= {task.status}
                        label = {(task.status === 0) ? 'Mark as done' : 'Mark as Pending'}
                        markAsDone={() => dispatch(actionTypes.taskMarkAsDone(index))}
                        markAsPending={() => dispatch(actionTypes.taskMarkAsPending(index))} />
                  </div>
              </CardContent>
            </Card>
        )
    }

    const taskName = (task) => {
        return task.status === 1 ? <strike>{task.name}</strike> : task.name
    }

    return (
      <div>
        {
          list.map((task, index) => {
            return _task(task, index);
          })
        }       
    </div>
    )
}

export default TaskList;