import React from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackbarMui = ({ openSnackbar, message, closeSnackbar, variant }) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={openSnackbar}
      autoHideDuration={3000}
      onClose={closeSnackbar}
    >
      {variant === 'success' ? (
        <Alert onClose={closeSnackbar} severity="success">
          {message}
        </Alert>) : 
        (<Alert severity="error">
          {message}
        </Alert>)
      }
    </Snackbar>
  );
}

export default SnackbarMui;