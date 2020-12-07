import React from 'react';
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

import { useSidebarStyles } from '../style';
import logo2 from '../images/logo2.png';

const DashboardLayout = () => {
  const classes = useSidebarStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = React.useState(false);
  const [path, setPath] = React.useState('');
  const [title, setTitle] = React.useState('Dashboard');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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

  const drawer = (
    <>
      <div className={classes.toolbar} style={{ backgroundColor: '#9A1752' }}>
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
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          );
        })}
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
