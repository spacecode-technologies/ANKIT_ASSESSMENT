import React from 'react'
import clsx from 'clsx';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { useTheme } from '@material-ui/core/styles';
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
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import DashboardIcon from '@material-ui/icons/Dashboard';
import LineStyleIcon from '@material-ui/icons/LineStyle';
import ReceiptIcon from '@material-ui/icons/Receipt';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';

import {useHomePageStyles } from '../style'
import logo2 from '../images/logo2.png'


const HomePage = () => {
    const classes = useHomePageStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
    return (
        <>
          <div className={classes.root}>
              <AppBar
                position='fixed'
                className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                })}
                >
                    
                    <Toolbar>
                        <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                                [classes.hide]: open,
                            })}
                        >
                        <MenuIcon className={classes.menuIcon}/>
                        </IconButton>
                            <Typography variant="h6" noWrap className={classes.typography}>
                                 Dashboard        
                            </Typography>
                    </Toolbar>
                </AppBar> 
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                                [classes.drawerOpen]: open,
                                [classes.drawerClose]: !open,
                         })}
                    classes={{
                         paper: clsx({
                             [classes.drawerOpen]: open,
                             [classes.drawerClose]: !open,
                        }),
                     }}
                >
                    <div className={classes.toolbar} style={{backgroundColor: "#880e4f" }}>
                            <img src={logo2} alt="logo" style={{width: '80%', textAlign: 'center'}} onClick={handleDrawerClose}/>
                    </div>
                    <Divider />
                    <List>
                        <Link to='/dash' className={classes.link}>
                            <ListItem button>
                                <ListItemIcon>
                                    <DashboardIcon/>
                                </ListItemIcon>
                                <ListItemText primary={"Dashboard"} />
                            </ListItem>
                        </Link>
                        <Link to='/inventory' className={classes.link}>
                            <ListItem button>
                                <ListItemIcon>
                                    <LineStyleIcon/>
                                </ListItemIcon>
                                <ListItemText primary={"Inventory"} />
                            </ListItem>
                        </Link>
                        <Link to='/transections' className={classes.link}>
                            <ListItem button>
                                <ListItemIcon>
                                    <ReceiptIcon/>
                                </ListItemIcon>
                                <ListItemText primary={"Transections"} />
                            </ListItem>
                        </Link>
                        <Link to='/customers' className={classes.link}>
                            <ListItem button>
                                <ListItemIcon>
                                    <PeopleIcon/>
                                </ListItemIcon>
                                <ListItemText primary={"Customers"} />
                            </ListItem>
                        </Link>
                        <Link to='/report' className={classes.link}>
                            <ListItem button>
                                <ListItemIcon>
                                    <BarChartIcon/>
                                </ListItemIcon>
                                <ListItemText primary={"Report"} />
                            </ListItem>
                        </Link>
                    </List>
                </Drawer>
          </div>
        </>
    )
}

export default HomePage
