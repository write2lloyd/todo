import React from 'react';

const markAsDone = props => {
    const buttonStatus = (props.status === 0) ? false : true;
    const label = (props.status === 0) ? 'Mark as done' : 'Done';
    
    return(
        <button 
            disabled={buttonStatus} 
            onClick={props.markAsDone}>{label}
        </button>
    )
}

export default markAsDone;
