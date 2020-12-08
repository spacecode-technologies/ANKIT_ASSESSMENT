import React, { useState } from 'react';
import clsx from 'clsx';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LineStyleIcon from '@material-ui/icons/LineStyle';
import ReceiptIcon from '@material-ui/icons/Receipt';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import PaletteIcon from '@material-ui/icons/Palette';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { useSidebarStyles } from '../style';
import logo2 from '../images/logo2.png';

const DashboardLayout = () => {
  const classes = useSidebarStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [path, setPath] = useState('');
  const [title, setTitle] = useState('Dashboard');
  const [anchorEl, setAnchorEl] = useState(null);
  const [color, setColor] = useState('#000');
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = [
    {
      name: 'Dashboard',
      icon: <DashboardIcon />,
      path: '/dashboard',
      onClick: () => {
        navigate('/dashboard');
        setTitle('Dashboard');
      },
    },
    {
      name: 'Inventory',
      icon: <LineStyleIcon />,
      path: '/inventory',
      onClick: () => {
        navigate('/inventory');
        setTitle('Inventory');
      },
    },
    {
      name: 'Transactions',
      icon: <ReceiptIcon />,
      path: '/transactions',
      onClick: () => {
        navigate('/transactions');
        setTitle('Transactions');
      },
    },
    {
      name: 'Customers',
      icon: <PeopleIcon />,
      path: '/customers',
      onClick: () => {
        navigate('/customers');
        setTitle('Customers');
      },
    },
    {
      name: 'Reports',
      icon: <BarChartIcon />,
      path: '/reports',
      onClick: () => {
        navigate('/reports');
        setTitle('Reports');
      },
    },
  ];
  React.useEffect(() => {
    setPath(location.pathname);
  }, [location, setPath]);

  const activeRoute = (route) => {
    return route === path;
  };

  const colors = [
    {
      class: classes.red,
      onClick: () => {
        handleClose();
        setColor(classes.red);
      },
    },
    {
      class: classes.green,
      onClick: () => {
        handleClose();
        setColor(classes.green);
      },
    },
    {
      class: classes.pink,
      onClick: () => {
        handleClose();
        setColor(classes.pink);
      },
    },
    {
      class: classes.indigo,
      onClick: () => {
        handleClose();
        setColor(classes.indigo);
      },
    },
    {
      class: classes.purple,
      onClick: () => {
        handleClose();
        setColor(classes.purple);
      },
    },
  ];

  const drawer = (
    <>
      <div className={classes.toolbar} style={{ backgroundColor: '#a31545' }}>
        <img
          src={logo2}
          alt='logo'
          style={{ width: '80%', marginRight: '1.5rem' }}
          onClick={handleDrawerClose}
        />
      </div>
      <Divider />
      <List>
        {options.map((option, index) => {
          const { icon, name, onClick } = option;
          return (
            <ListItem
              button
              key={index}
              onClick={onClick}
              selected={activeRoute(option.path)}
              classes={{
                selected: classes.listItemSelected,
                button: classes.listItemButton,
              }}>
              <ListItemIcon className={classes.listIcons}>{icon}</ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          );
        })}
        <ListItem
          aria-controls='simple-menu'
          aria-haspopup='true'
          onClick={handleClick}>
          <ListItemIcon className={classes.listIcons}>
            <PaletteIcon />
          </ListItemIcon>
          <ListItemText primary={'Color Pallete'} />
        </ListItem>

        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          {colors.map((clr) => (
            <MenuItem onClick={clr.onClick}>
              <span className={clr.class}></span>
            </MenuItem>
          ))}
        </Menu>
      </List>
    </>
  );
  return (
    <>
      <div className={classes.root}>
        <AppBar
          position='fixed'
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}>
          <MainToolbar
            title={title}
            open={open}
            handleDrawerOpen={handleDrawerOpen}
          />
        </AppBar>
        <Drawer
          variant='permanent'
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}>
          {drawer}
        </Drawer>

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Outlet />
        </main>
      </div>
    </>
  );
};
const MainToolbar = ({ title, handleDrawerOpen, open }) => {
  const classes = useSidebarStyles();
  return (
    <Toolbar>
      <IconButton
        color='inherit'
        aria-label='open drawer'
        onClick={handleDrawerOpen}
        edge='start'
        className={clsx(classes.menuButton, {
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
export default DashboardLayout;
