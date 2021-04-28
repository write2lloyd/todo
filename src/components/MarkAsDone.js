import React from 'react';
import { Button } from '@material-ui/core';

const toggle = (props) => {
  console.log('inside toggle', props);
  if(props.status === 0) {
    props.markAsDone()
  } else {
    props.markAsPending();
  }
}

const MarkAsDone = props => {
    
    return(
        <Button variant="contained" color="primary"
            onClick={() => toggle(props)}>{props.label}
        </Button>
    )
}

export default MarkAsDone;
