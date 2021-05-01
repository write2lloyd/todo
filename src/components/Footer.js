import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

const useStyles = makeStyles(theme => {
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
    <div className={classes.container} data-testid="footer">
      <Typography className={classes.copy}>{`© ${moment().year()} TaskRunner Inc. All rights reserved.`}</Typography>
    </div>
  )
}

export default Footer;