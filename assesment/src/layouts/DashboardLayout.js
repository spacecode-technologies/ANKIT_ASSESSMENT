import React, { useState } from 'react';
import clsx from 'clsx';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
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
import { makeStyles } from '@material-ui/styles';

import { useSidebarStyles } from '../style';
import MainToolbar from '../components/MainToolbar';
import logo2 from '../images/logo2.png';

const useStyles = makeStyles((theme) => ({
  root: {
    // color: '#000',
    backgroundColor: (props) => props.color,
    '&:hover': {
      backgroundColor: (props) => props.color,
    },

    '& span': {
      fontWeight: '600 !important',
    },
   
  },
 
  listItemButton: {
    marginLeft: 6,
    color: '#f44336 !important',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: (props) => props.color,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuBar: {
    color: '#000',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [path, setPath] = useState('');
  const [title, setTitle] = useState('Dashboard');
  const [anchorEl, setAnchorEl] = useState(null);
  const [color, setColor] = useState('#c60055 ');
  const classes = useSidebarStyles({color: `${color}`});
  const classes2 = useStyles({
    color: `${color}`,
    hover: `#000`,
    iconColor: '#c60055',
  });

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
        setColor('#c0392b');
      },
    },
    {
      class: classes.green,
      onClick: () => {
        handleClose();
        setColor('#27ae60');
      },
    },
    {
      class: classes.pink,
      onClick: () => {
        handleClose();
        setColor('#34495e');
      },
    },
    {
      class: classes.indigo,
      onClick: () => {
        handleClose();
        setColor('#2980b9');
      },
    },
    {
      class: classes.purple,
      onClick: () => {
        handleClose();
        setColor('#8e44ad');
      },
    },
  ];

  const drawer = (
    <>
      <div className={classes.toolbar} style={{ backgroundColor: `#fff` }}>
        <img
          src={logo2}
          alt='logo'
          style={{ width: '80%', marginRight: '1.5rem' }}
          onClick={handleDrawerClose}
        />
      </div>
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
          className={clsx(classes2.appBar, {
            [classes.appBarShift]: open,
          })}>
          <MainToolbar
            title={title}
            open={open}
            handleDrawerOpen={handleDrawerOpen}
            classes2={classes2.menuBar}
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

export default DashboardLayout;
