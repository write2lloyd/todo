import React from 'react';
import { Typography, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return {
    userInfo: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    avatar: {
      marginRight: theme.spacing(1),
    },
  }
});

const UserInfo = ({ user }) => {
  const classes = useStyles();
  return (
    <div className={classes.userInfo} data-testid="userInfo">
      <Avatar className={classes.avatar} src={user && user.picture} data-testid="avatar"/>
      <Typography data-testid="name">{user && user.name}</Typography>
    </div>
  );
};

export default UserInfo;