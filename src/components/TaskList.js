import React from 'react';
import './TaskList.css';
import MarkAsDone from './MarkAsDone';
import { Button, Card, CardContent } from '@material-ui/core';
import moment from 'moment';

const TaskList = (props) => {
    const list = props.taskList;
    console.table(list);

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
                      onClick = {() => props.deleteTask(index)}>
                      Delete
                    </Button>
                    &nbsp;
                    <MarkAsDone
                        status= {task.status}
                        label = {(task.status === 0) ? 'Mark as done' : 'Done'}
                        markAsDone={()=>props.doneTask(index)}/>
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