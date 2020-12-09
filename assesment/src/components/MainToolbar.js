import React from 'react';
import { IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { useSidebarStyles } from '../style';

const MainToolbar = ({ title, handleDrawerOpen, open,classes2 }) => {
  const classes = useSidebarStyles();
  return (
    <Toolbar>
      <IconButton
        color='inherit'
        aria-label='open drawer'
        onClick={handleDrawerOpen}
        edge='start'
        className={clsx(classes2, {
          [classes.hide]: open,
        })}>
        <MenuIcon className={classes.menuIcon} />
      </IconButton>
      <Typography variant='h6' noWrap className={classes.typography}>
        {title}
      </Typography>
    </Toolbar>
  );
};

export default MainToolbar;
