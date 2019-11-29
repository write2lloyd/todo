import React from 'react';
import { Button, TextField } from '@material-ui/core';

const task = (props) => {
    const handleClick = () => {
        if (props.name) {
            props.addTask(props.name, 0);
        } else {
            alert('Tasks cannot be blank');
        }
    }
    return (
        <div>
            <TextField variant="standard" label="Enter Task" type="text"
                onChange={(e) => props.textChanged(e.target.value)} 
                value={props.name}
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