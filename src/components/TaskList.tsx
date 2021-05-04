import * as React from 'react';
import './TaskList.css';
import Task from './Task';

interface Props {
  taskList: any
}

const TaskList = (props: Props) => {
  const list = props.taskList;
  return (
    <div>
      {
        list.map((task: any, index: number) => {
          return (
            <Task 
              key={index}
              taskId={index}
              name={task.name}
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