import { makeStyles } from '@material-ui/core';

export const useLoginPageStyles = makeStyles({
  card: {
    maxWidth: 380,
    padding: '16px 40px',
    marginBottom: 10,
    boxShadow: '0px 0px 21px 2px rgba(79,79,79,0.69)',
  },
  section: {
    display: 'grid',
    placeItems: 'center',
    height: '100vh',
  },

  button: {
    marginLeft: '80px',
    marginTop: '20px',
    marginBottom: '2.5rem',
    height: 40,
    width: 100,
    borderRadius: '15px',
  },
  typography: {
    marginTop: '2rem',
    fontSize: 10,
    color: '#878787',
  },
  forgotPassword: {
    textDecoration: 'none',
    color: '#9C1C75',
  },
  textField: {
    width: '250px',
  },
});
const drawerWidth = 240;
export const useSidebarStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    position: 'absolute',
    width: 400,
    // backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#ffffff',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  typography: {
    color: '#000',
    fontWeight: 500,
  },
  link: {
    textDecoration: 'none',
    color: '#000',
  },
  menuIcon: {
    color: '#a31545',
  },
  listItemSelected: {
    color: '#a31545 !important',
    backgroundColor: '#FDA7DF !important',
    '& span': {
      fontWeight: '600 !important',
    },
  },
  listItemButton: {
    paddingTop: '10px !important',
    paddingBottom: '10px !important',
    // color: '#f44336 !important',
  },
  listIcons: {
    marginLeft: 6,
    color: '#a31545',
  },
  red: {
    backgroundColor: '#f44336',
    borderRadius: '50%',
    height: '1rem',
    width: '1rem',
  },
  green: {
    backgroundColor: '#4caf50',
    borderRadius: '50%',
    height: '1rem',
    width: '1rem',
  },
  pink: {
    backgroundColor: '#c60055',
    borderRadius: '50%',
    height: '1rem',
    width: '1rem',
  },
  indigo: {
    backgroundColor: '#3f51b5',
    borderRadius: '50%',
    height: '1rem',
    width: '1rem',
  },
  purple: {
    backgroundColor: '#9c27b0',
    borderRadius: '50%',
    height: '1rem',
    width: '1rem',
  },
}));

export const useInventoryPageStyles = makeStyles({
  input: {
    height: 35,
    fontSize: '14px !important',
    border: 'solid 1.5px #000',
    borderRadius: 6,
    color: 'rgba(var(--i1d,38,38,38),1)',
    outline: 1,
    padding: '4px 4px 4px 26px',
    zIndex: 2,
  },
  typography: {
    fontWeight: 'bold'
  }
});
