import { makeStyles } from "@material-ui/core";


export const useLoginPageStyles = makeStyles({

  card: {
    maxWidth: 380,
    padding: "16px 40px",
    marginBottom: 10,
    boxShadow: '0px 0px 21px 2px rgba(79,79,79,0.69)'
  },
  section: {
    display: "grid",
    placeItems: "center",
    height: "100vh"
  },

  
  button: {
    marginLeft: "80px" ,
    marginTop: "20px",
    marginBottom: "2.5rem",
    height: 40,
    width: 100,
    borderRadius: "15px"
  },
  typography: {
    marginTop: '2rem',
    fontSize: 10,
    color: "#878787"

  },
  forgotPassword: {
      textDecoration: "none",
      color: "#9C1C75",
  }, 
  textField: {
      width: "250px"
  }
  
});
const drawerWidth = 240;
export const useHomePageStyles = makeStyles((theme) => ({
    
    root: {
        display: "flex"
    },
    appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#ffffff",
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
    color: "#979797",
    fontWeight: 600,

  },
  link: {
      textDecoration: "none",
      color: "#000"
  },
  menuIcon: {
      color: "#000"
  }
}))