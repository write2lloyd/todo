import React from 'react';

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
            <input type="text" 
                onChange={(e) => props.textChanged(e.target.value)} 
                value={props.name}
            />
            <button onClick={() => handleClick()} disabled={props.disableButton}>
                Add Task
            </button>
        </div>
    );
}

export default task;