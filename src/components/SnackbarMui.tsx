import React from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

interface Props {
  openSnackbar: boolean,
  message: string,
  closeSnackbar: () => void,
  variant: string
}

function Alert (props : any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackbarMui = (props: Props) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={props.openSnackbar}
      autoHideDuration={3000}
      onClose={() => props.closeSnackbar()}
    >
      {props.variant === 'success' ? (
        <Alert onClose={props.closeSnackbar} severity="success">
          {props.message}
        </Alert>) : 
        (<Alert severity="error">
          {props.message}
        </Alert>)
      }
    </Snackbar>
  );
}

export default SnackbarMui;