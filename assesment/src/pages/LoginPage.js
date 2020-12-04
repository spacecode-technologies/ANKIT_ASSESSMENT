import React, {useState} from 'react'
import { useLoginPageStyles } from "../style";
import { Typography, FormControl, Grid, InputAdornment, FormControlLabel, Checkbox } from '@material-ui/core';
import { Card, CardHeader, TextField, Button } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import logo from '../images/logo.png'
import { Link, useHistory } from 'react-router-dom';

const LoginPage = () => {
    const classes = useLoginPageStyles();
    const history = useHistory();
     const [showPassword, setPasswordVisibility] = useState(false);
    
     function togglePasswordVisibility() {
    setPasswordVisibility((prev) => !prev);


    }
    function handleSubmit(){
      history.push('/homepage')
    }
    return (
        <>
           <section className={classes.section}>
            <article>
                <Card className={classes.card}>
                    <img src={logo} alt={logo} style={{ width: "250px" }} />
                    
                        <form onSubmit={handleSubmit}>
                            
                            <Grid container spacing={2} alignItems="flex-end">
                                <Grid item>
                                    <EmailIcon />
                                </Grid>
                                 <Grid item>
                                    <TextField id="input-with-icon-grid" label="Email" required />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} alignItems="flex-end">
                                <Grid item>
                                    <LockIcon />
                                </Grid>
                                 <Grid item>
                                    <TextField
                                        label="Password"  
                                        required
                                        InputProps={{
                                            endAdornment: 
                                                <InputAdornment>
                                                    <Button onClick={togglePasswordVisibility}>
                                                        {showPassword ? <Visibility/> : <VisibilityOff/>}
                                                    </Button>
                                                </InputAdornment>
                                                }}
                                        type={showPassword ? 'text' : 'password'}
                                        fullWidth
                                        varient="filled"
                                        margin="dense"
                                        className={classes.textField}
                                        autoComplete="current-password"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item>
                                    <FormControlLabel
                                             value="end"
                                             control={<Checkbox color="primary" />}
                                             label="Secure Login"
                                             labelPlacement="end"
                                    />
                                </Grid>
                                <Grid item>
                                    <Link className={classes.forgotPassword} to='/forgotpassword'>Forgot Password</Link>
                                </Grid>
                            </Grid>
                            
                            <Button 
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                size="small"
                                type="submit"
                            >
                                Login
                            </Button>
                        </form>
                        <Typography variant="caption" display="block" gutterBottom className={classes.typography}>Copyright © Spacecode SAS. 2020 All rights reserved.</Typography>
                </Card>
            </article>
            </section> 
        </>
    )
}

export default LoginPage
