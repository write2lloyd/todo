import React from 'react';
import { Button } from '@material-ui/core';

const markAsDone = props => {
    const buttonStatus = (props.status === 0) ? false : true;
    const label = (props.status === 0) ? 'Mark as done' : 'Done';
    
    return(
        <Button variant="contained" color="secondary"
            disabled={buttonStatus} 
            onClick={props.markAsDone}>{label}
        </Button>
    )
}

export default markAsDone;
