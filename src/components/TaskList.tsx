import * as React from 'react';
import './TaskList.css';
import Task from './Task';

interface TaskList {
  taskList: Array<{ name: string, dueDate: string, status: number, quote: string, author: string }>
}

const TaskList = (props: TaskList) => {
  const list = props.taskList;
  return (
    <>
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
    </>
  )
}

export default TaskList;