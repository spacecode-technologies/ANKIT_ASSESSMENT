import { makeStyles } from "@material-ui/core";

export const useLoginPageStyles = makeStyles({

  card: {
    maxWidth: 380,
    padding: "16px 40px",
    marginBottom: 10
  },
  section: {
    display: "grid",
    placeItems: "center",
    height: "100vh"
  },

  
  button: {
    marginLeft: "80px" ,
    marginTop: "20px",
    height: 40,
    width: 100,
    borderRadius: "15px"
    // padding:"20px" 
  },
  typography: {
    margin: "10px 0px",
    fontSize: 10,
    color: "#878787"

  },
  forgotPassword: {
      textDecoration: "none",
      color: "#9C1C75",
  }
  
});