import React from 'react';
import './TaskList.css';
import Task from './Task';

const TaskList = (props) => {
  const list = props.taskList;
  return (
    <div>
      {
        list.map((task, index) => {
          return (
            <Task 
              key={index}
              taskId={index}
              name={task.status === 1 ? <strike>{task.name}</strike> : task.name}
              dueDate={task.dueDate}
              status={task.status}
              quote={task.quote.content}
              author={task.quote.author}
            />
          )
        })
      }
    </div>
  )
}

export default TaskList;