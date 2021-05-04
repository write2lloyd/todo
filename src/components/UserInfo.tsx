import React from 'react';
import { Typography, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface User {
  name: string,
  picture: string,
}

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

const UserInfo = ({name, picture}: User) => {
  const classes = useStyles();
  return (
    <div className={classes.userInfo} data-testid="userInfo">
      <Avatar className={classes.avatar} src={picture} data-testid="avatar"/>
      <Typography data-testid="name">{name}</Typography>
    </div>
  );
};

export default UserInfo;