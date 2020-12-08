import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginPageStyles } from '../style';
import {
  Typography,
  Grid,
  InputAdornment,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import { Card, Button } from '@material-ui/core';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import logo from '../images/logo.png';
import { login } from '../actions/userActions';

const LoginView = () => {
  const classes = useLoginPageStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [username, setUsername] = useState('32264841');
  const [password, setPassword] = useState('admin');
  const [showPassword, setPasswordVisibility] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const redirect = location.search ? location.search.split('=')[1] : '/dashboard';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  function togglePasswordVisibility() {
    setPasswordVisibility((prev) => !prev);
  }
  function handleEmailChange(e) {
    setUsername(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login(username, password));
  }
  return (
    <>
      <section className={classes.section}>
        <article>
          <Card className={classes.card}>
            <img src={logo} alt={logo} style={{ width: '250px' }} />

            <ValidatorForm onSubmit={handleSubmit}>
              <Grid container spacing={1} alignItems='flex-end'>
                <Grid item>
                  <EmailIcon />
                </Grid>
                <Grid item>
                  <TextValidator
                    id='input-with-icon-grid'
                    label='Email'
                    value={username}
                    className={classes.textField}
                    autoComplete='off'
                    onChange={handleEmailChange}
                    validators={['required']}
                    errorMessages={['Email is required']}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1} alignItems='flex-end'>
                <Grid item>
                  <LockIcon />
                </Grid>
                <Grid item>
                  <TextValidator
                    label='Password'
                    InputProps={{
                      endAdornment: (
                        <InputAdornment>
                          <Button onClick={togglePasswordVisibility}>
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </Button>
                        </InputAdornment>
                      ),
                    }}
                    type={showPassword ? 'text' : 'password'}
                    margin='dense'
                    autoComplete='off'
                    className={classes.textField}
                    onChange={handlePasswordChange}
                    value={password}
                    validators={['required']}
                    errorMessages={['Password is required']}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} alignItems='center'>
                <Grid item>
                  <FormControlLabel
                    value='end'
                    control={<Checkbox color='primary' />}
                    label='Secure Login'
                    labelPlacement='end'
                  />
                </Grid>
                <Grid item>
                  <Link className={classes.forgotPassword} to='/forgotpassword'>
                    Forgot Password
                  </Link>
                </Grid>
              </Grid>

              <Button
                className={classes.button}
                variant='contained'
                color='primary'
                size='small'
                type='submit'>
                Login
              </Button>
            </ValidatorForm>
            <Typography
              variant='caption'
              display='block'
              gutterBottom
              className={classes.typography}>
              Copyright © Spacecode SAS. 2020 All rights reserved.
            </Typography>
          </Card>
        </article>
      </section>
    </>
  );
};

export default LoginView;
