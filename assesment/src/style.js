import { makeStyles } from "@material-ui/core";
import logo from './images/logo.png'

export const useLoginPageStyles = makeStyles({
  loginCard: {
    maxWidth: 348,
    padding: "16px 40px",
    marginBottom: 10,
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "2fr 1fr"
  },
  card: {
    maxWidth: 348,
    padding: "16px 40px",
    marginBottom: 10
  },
  section: {
    display: "grid",
    placeItems: "center",
    height: "100vh"
  },
  cardHeader: {
    backgroundImage: `url(${logo})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-98px 0",
    height: 51,
    width: 175,
    margin: "22px auto 12px"
  },
  textField: {
    marginBottom: 6
  },
  button: {
    margin: "8px 0px"
  },
  typography: {
    margin: "10px 0px"
  },
  
});