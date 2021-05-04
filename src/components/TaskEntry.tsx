import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import SnackbarMui from '../components/SnackbarMui';

interface Props {
  addTask: Function,
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.light,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  }
}));

const TaskEntry = (props: Props) => {
  const [taskname, setTaskname] = useState('');
  const [tasknameError, setTasknameError] = useState(false);
  const [tasknameHelperText, setTasknameHelperText] = useState<null | string>();
  const [dueDate, setDueDate] = useState(moment().format('YYYY-MM-DD'));
  const [errorDate, setErrorDate] = useState(false);
  const [dueDateHelperText, setDueDateHelperText] = useState<null | string>();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openSnackbarError, setOpenSnackbarError] = useState(false);
  const [disableAddTaskButton, setDisableAddTaskButton] = useState(false)
  const classes = useStyles();
  
  const handleClick = () => {
    if (!moment(dueDate, 'YYYY-MM-DD', true).isValid()) {
      setErrorDate(true);
      setDueDateHelperText('Invalid Date');
    }
    else if (!taskname) {
      setTasknameError(true);
      setTasknameHelperText('Taskname cannot be blank');
    } else {
      setDisableAddTaskButton(true);
      props.addTask(taskname, dueDate, 0)
      .then(() => {
        cleanupAfterAdd();
      }).catch(() => {
        cleanupAfterError();
      }) 
    }
  }

  const cleanupAfterAdd = () => {
    setDisableAddTaskButton(false);
    setOpenSnackbar(true);
    setTaskname('');
    setErrorDate(false);
    setDueDateHelperText(null);
    setTasknameError(false);
    setTasknameHelperText(null);
  }

  const cleanupAfterError = () => {
    setTaskname('');
    setErrorDate(false);
    setDueDateHelperText(null);
    setTasknameError(false);
    setTasknameHelperText(null);
    setDisableAddTaskButton(false);
    setOpenSnackbarError(true);
  }

  const renderSnackbar = () => (
    <SnackbarMui 
      message="Task added!"
      openSnackbar={openSnackbar}
      closeSnackbar={() => setOpenSnackbar(false)}
      variant="success"
    />
  );

  const renderSnackbarError = () => (
    <SnackbarMui 
      message="Error creating task!"
      openSnackbar={openSnackbarError}
      closeSnackbar={() => setOpenSnackbarError(false)}
      variant="error"
    />
  );

  return (
    <div className={classes.container}>
      {renderSnackbar()}
      {renderSnackbarError()}
      <TextField variant="standard" label="Enter Task" type="text"
        onChange={(e) => setTaskname(e.target.value)}
        value={taskname}
        autoFocus={true}
        error={tasknameError}
        helperText={tasknameHelperText}
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
        error={errorDate}
        helperText={dueDateHelperText}
      />
            &nbsp;
      <Button variant="contained" color="primary" style={{ verticalAlign: "bottom" }}
        onClick={() => handleClick()}
        disabled={disableAddTaskButton}>
        Add Task
      </Button>
    </div>
  );
}

export default TaskEntry;