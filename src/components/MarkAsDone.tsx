import React from 'react';
import { Button } from '@material-ui/core';

interface Props {
  label: string,
  status: number,
  markAsDone: () => void,
  markAsPending: Function,
}

const toggle = (props: Props) => {
  if (props.status === 0) {
    props.markAsDone()
  } else {
    props.markAsPending();
  }
}

const MarkAsDone = (props: Props) => {

  return (
    <Button variant="contained" color="primary"
      onClick={() => toggle(props)}>{props.label}
    </Button>
  )
}

export default MarkAsDone;
