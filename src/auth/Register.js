import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as LinkTo, useHistory } from 'react-router-dom';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Thenics Regiment
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1)
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },root: {
    background:'green',
    width:'100%',
  },errorToast:{
    background:'red',
    width:'100%',
  }
}));

export default function Register() {
  const classes = useStyles();
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password2, setPassword2] = React.useState('');
  const [emailValid, setEmailValid] = React.useState(false);
  const [userValid, setUserValid] = React.useState(false);
  const [passwordsMatch, setPasswordsMatch] = React.useState(true)
  const [passwordLong, setPasswordLong] = React.useState(true)
  const [passwordValid, setPasswordValid] = React.useState(true);
  const [password2Valid, setPassword2Valid] = React.useState(true);
  const [successToast, setSuccessToast] = React.useState(false);
  const [errorToast, setErrorToast] = React.useState(false);
  const history = useHistory()
  
  

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('Registering new user...')
  
    const fieldsValid = validateFields()
    console.log("All fields are valid and ready to fire: " + fieldsValid)
    if(fieldsValid){
      sendRegistrationRequest()
    }
  
  }
  
  function sendRegistrationRequest(){
    const registrationEndpoint = 'http://localhost:5000/users/register'
    console.log('sending registration request to: ' + registrationEndpoint)
    const registrationRequest = {
      username: username,
      email: email,
      password: password,
      password2: password2
    };
    axios.post(registrationEndpoint, registrationRequest)
    .then((res) => {
      const{successful, errors} = res.data;
     
      if(successful){
        console.log("successful registration")
        setSuccessToast(true)
        setTimeout(() =>{
          history.push('/login')
        }, 5000);
      }else{
        console.log(errors)
        setErrorToast(true)
      }
    }).catch((err) => {
      console.log(err)
    });
  }
 
  function validateFields() {
    console.log(`username: ${username} userValid: ${userValid}`)
    username === '' ? setUserValid(false) : setUserValid(true); // wtf
    console.log(userValid)
    return userValid
    /*  email === ''? setEmailValid(false) : setEmailValid(true);
    password !== '' ? setPasswordValid(false) : setPasswordValid(true);
    password2 !== ''? setPassword2Valid(false) : setPassword2Valid(true)
    password !== password2 ? setPasswordsMatch(false) : setPasswordsMatch(true)
    password.length <= 7 ? setPasswordLong(false) : setPasswordLong(true)
    console.log(`user valid: ${userValid} email valid: ${emailValid} passwordValid: ${passwordValid} password2Valid: ${password2Valid} passwordLong ${passwordLong} paswordsMatch ${passwordsMatch}`)
    return userValid && emailValid && passwordValid && password2Valid && passwordLong && passwordsMatch; */
  }

  const handleCloseSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSuccessToast(false);
  };



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon color="primary"/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                name="username"
                variant="outlined"
                required
                fullWidth
                error={userValid ? true: false}
                helperText={userValid ? 'User name required' : ''}
                id="username"
                label="Username"
                autoFocus
                onChange={e => setUsername(e.target.value)}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                error={emailValid ? true: false}
                helperText={emailValid ? 'Email is invalid' : ''}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={e => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                error={passwordLong && passwordValid && passwordsMatch ? false: true}
                helperText={passwordLong && passwordValid && passwordsMatch ? '' : 'Passwords need to match and more than 7 chars'}
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={e => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                error={password2Valid  && passwordLong && passwordsMatch ? false: true}
                helperText={password2Valid  && passwordLong && passwordsMatch ?  '' : 'Passwords need to match and more than 7 chars'}
                name="password2"
                label="Re-enter Password"
                type="password"
                id="password2"
                onChange={e => setPassword2(e.target.value)}
              />
            </Grid>
         
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <LinkTo to={{ pathname: '/login' }}>
                <Link to='/signup' variant="body2">
                  Already have an account? Sign in
              </Link>
              </LinkTo>
            </Grid>
          </Grid>
        </form>
      </div>
      <Snackbar
          ContentProps={{
            classes: {
              root: classes.root
            }
          }}
          anchorOrigin={{vertical:'bottom', horizontal:'center'}}
          open={successToast}
          onClose={handleCloseSuccess}
          message="Registration successful!"
          autoHideDuration='5000'
          bodySytle
      />
       <Snackbar
          ContentProps={{
            classes: {
              root: classes.errorToast
            }
          }}
          anchorOrigin={{vertical:'bottom', horizontal:'center'}}
          open={errorToast}
          onClose={handleCloseSuccess}
          message="Registration unsuccessful"
          autoHideDuration='5000'
          bodySytle
      />
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}