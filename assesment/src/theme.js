import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#9C1C75'
        },
        secondary: {
            main: '#EEEEEE'
        },
        background: {
            main: '#FFFFFF'
        }
    },
    MuiCard: {
      root: {
        boxShadow: "none",
        border: "1px solid #e6e6e6"
      }
    },
})

export default theme;