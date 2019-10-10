import React from 'react';
import './TaskList.css';
import MarkAsDone from './MarkAsDone';

const taskList = (props) => {
    const list = props.taskList;
    console.log(list.length);
    console.table(list);

    const _task = (task, index) => {
        return (
            <div key={index} className="container">
                <p>
                  {taskName(task)}
                </p>
                <button onClick = {() => props.deleteTask(index)}>Delete</button>
                <MarkAsDone
                    status= {task.status}
                    label = {(task.status === 0) ? 'Mark as done' : 'Done'}
                    markAsDone={()=>props.doneTask(index)}/>
              </div>
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

export default taskList;