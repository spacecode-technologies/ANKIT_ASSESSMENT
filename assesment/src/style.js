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
    color: '#ffff',
    fontWeight: 500,
  },
  link: {
    textDecoration: 'none',
    color: '#000',
  },

  listItemSelected: {
    backgroundColor: (props) => props.color,
    '&:hover': {
      backgroundColor: (props) => props.color,
    },
  },
  listItemButton: {
    fontWeight: '600',

    paddingTop: '10px !important',
    paddingBottom: '10px !important',
    color: (props) => props.color,
  },
  listIcons: {
    color: (props) => props.color,
  },
  menuIcon: {
    color: '#fff',
  },

  magenta: {
    backgroundColor: '#c60055',
    borderRadius: '50%',
    height: '1rem',
    width: '1rem',
  },
  red: {
    backgroundColor: '#c0392b',
    borderRadius: '50%',
    height: '1rem',
    width: '1rem',
  },
  green: {
    backgroundColor: '#27ae60',
    borderRadius: '50%',
    height: '1rem',
    width: '1rem',
  },
  pink: {
    backgroundColor: '#34495e',
    borderRadius: '50%',
    height: '1rem',
    width: '1rem',
  },
  indigo: {
    backgroundColor: '#2980b9',
    borderRadius: '50%',
    height: '1rem',
    width: '1rem',
  },
  purple: {
    backgroundColor: '#8e44ad',
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
    fontWeight: 'bold',
  },
});
export const useProductStyles = makeStyles((theme) => ({
  image: {
    width: '70%',
    marginLeft: '5rem',
  },
  link: {
    // textDecoration: 'none',
    // marginTop: '1rem',
    paddingTop: '1rem',
    marginLeft: '1rem',
    color: '#C60055',
    display: 'flex',
    alignItems: 'center',
  },
  typo: {
    marginLeft: '1rem',
    color: '#484848',
    marginTop: theme.spacing(0.5),
  },
  // typography: {
  //   color: '#C60055',
  // },

  container: {
    padding: '0px 16px 8px !important',
  },

  header: {
    width: '100%',
    height: '80px',
    backgroundColor: '#dcdde1',
  },
}));

export const useDashboardPageStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    padding: '16px 40px',
    marginBottom: 10,
    boxShadow: '0px 0px 2px 2px rgba(79,79,79,0.4)',
  },
  typography: {
    fontWeight: '500',
    marginBottom: theme.spacing(2),
  },
  pageTitleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
    // marginTop: theme.spacing(0.5),
  },
  typo: {
    color: theme.palette.text.hint,
  },
}));

export const useProductModalStyles = makeStyles({
  overlay: {
    position: 'fixed !important',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5) !important',
    zIndex: '1200 !important',
    padding: '0 40px !important',
    pointerEvents: 'auto',
  },
  close: {
    padding: 12,
    top: 0,
    right: 0,
    position: 'fixed',
    zIndex: 1201,
    cursor: 'pointer',
  },
});
