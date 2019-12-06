import React from 'react';
import { Button, TextField } from '@material-ui/core';

const task = (props) => {
    const handleClick = () => {
        if (props.name) {
            props.addTask(props.name, props.dueDate, 0);
        } else {
            alert('Tasks cannot be blank');
        }
    }

    return (
        <div>
            <TextField variant="standard" label="Enter Task" type="text"
                onChange={(e) => props.textChanged(e.target.value)} 
                value={props.name}
                autoFocus={true}
            />
            &nbsp;
            <TextField
                id="dueDate"
                label="Due"
                type="date"
                value={props.dueDate}
                onChange={(e) => props.dueDateChanged(e.target.value)}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            &nbsp;
            <Button variant="contained" color="primary" style={{verticalAlign: "bottom"}}
                onClick={() => handleClick()} 
                disabled={props.disableButton}>
                Add Task
            </Button>
        </div>
    );
}

export default task;