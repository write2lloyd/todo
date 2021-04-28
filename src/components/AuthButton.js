import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
      display: 'flex',
      height: 50,
      justifyContent: 'flex-end',
      alignItems: 'center',
      flex: 1
  }
}));

const Login = () => {
  const classes = useStyles();
  const { loginWithRedirect} = useAuth0();
  return (
      <Container className={classes.container}>
          <Button variant="contained" color="secondary" onClick={() => loginWithRedirect()}>Login</Button>
      </Container>
  )
}

const Logout = () => {
  const classes = useStyles();
  const { logout } = useAuth0();
  return (
      <Container className={classes.container}>
        <Button variant="contained" color="secondary" onClick={() => logout({ returnTo: window.location.origin })}>Logout</Button>
      </Container>
  )
}


const AuthButton = () => {
    const { isAuthenticated } = useAuth0();

    console.log('isAuthenticated', isAuthenticated);
    
    return (
      isAuthenticated ? <Logout /> : <Login /> 
    )
}

export default AuthButton;