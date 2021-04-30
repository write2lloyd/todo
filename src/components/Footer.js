import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  console.log(theme);
  return {
    container: {
      position: 'fixed',
      bottom: 0,
      backgroundColor: theme.palette.primary.dark,
      width: '100%',
      textAlign: 'center',
      color: theme.palette.secondary.light
    },
    copy: {
      fontSize: 10
    }
  }
});

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.copy}>© 2021 TaskRunner Inc. All rights reserved.</Typography>
      
    </div>
  )
}

export default Footer;