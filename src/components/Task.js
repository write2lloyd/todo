import React from 'react';

const task = (props) => {
    return (
        <div>
            <input type="text" onChange={(e) => props.textChanged(e.target.value)}/>
            <button
                onClick={() => props.addTask(props.name)}>
                Add Task
            </button>
        </div>
    );
}

export default task;