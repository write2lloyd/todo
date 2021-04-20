import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}));

const TaskEntry = (props) => {
  const [taskname, setTaskname] = useState('');
  const [dueDate, setDueDate] = useState(moment().format('YYYY-MM-DD'));
  const classes = useStyles();
  const handleClick = (taskname) => {
    if (taskname) {
      props.addTask(taskname, dueDate, 0);
      setTaskname('');
    } else {
      alert('Tasks cannot be blank');
    }
  }

  return (
    <div className={classes.container}>
      <TextField variant="standard" label="Enter Task" type="text"
        onChange={(e) => setTaskname(e.target.value)}
        value={taskname}
        autoFocus={true}
      />
            &nbsp;
      <TextField
        id="dueDate"
        label="Due"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
            &nbsp;
      <Button variant="contained" color="primary" style={{ verticalAlign: "bottom" }}
        onClick={() => handleClick(taskname, dueDate)}
        disabled={props.disableButton}>
        Add Task
      </Button>
    </div>
  );
}

export default TaskEntry;