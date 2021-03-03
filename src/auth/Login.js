import React from 'react';
import BackToHome from './BackToHome';
import { makeStyles } from '@material-ui/core/styles';
import {Formik, Form} from 'formik';
import * as yup from 'yup';
import TextFieldThenics from './TextFieldThenics';
import { Typography, Button, Snackbar } from '@material-ui/core';
import Copyright from './Copyright';
import { Link as LinkTo, useHistory } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import LockIcon from '@material-ui/icons/Lock';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';
import UserProfile from './UserProfile'

export default function Login() {
  const classes = useStyles();
  const [errorToast, setErrorToast] = React.useState(false);
  const [errorMessages, setErrorMessages] = React.useState();
  const [successToast, setSuccessToast] = React.useState(false);
  const history = useHistory()
  return (
    <div>
     
      <div className={classes.formContainer}>
        <Avatar className={classes.avatar}><LockIcon color="primary" className={classes.lockIcon}/></Avatar>
    
      <Typography className={classes.title} variant="h5">Login</Typography>
        <Formik 
          initialValues={{email:'', password:''}}
          onSubmit={(data, {setSubmitting}) =>{
            setSubmitting(true);
            data.withCredentials = true;
            axios({
              method:"POST",
              data: data,
              withCredentials: true,
              url: process.env.REACT_APP_API_HOST + "/users/login"
            })
            .then(res => {
              const successful = res.data.successful;
              console.log('login was successful: ', successful);
              if(successful){
                setSuccessToast(true)
                axios({
                  url: process.env.REACT_APP_API_HOST + '/users/user',
                  withCredentials: true
                })
                .then(res => {
                  UserProfile.setUsername(res.data.username)
                  UserProfile.setEmail(res.data.email)
                })
                .catch(err => console.log(err))
                
                history.push('/dashboard')
              }else{
                setErrorMessages(res.data.errors);
                setErrorToast(true)
              }
            }).catch(err => console.log(err));
            setSubmitting(false);
          }}
          validationSchema={validationSchema}>
          {({isSubmitting}) => (
             
             <Form>
               <TextFieldThenics className={classes.formItem} name="email" type="input" label="Email"></TextFieldThenics>
               <TextFieldThenics className={classes.formItem} name="password" type="password" label="Password"></TextFieldThenics>
               <Button className={classes.submitButton} variant="contained" disabled={isSubmitting} type="submit" color="primary">Submit</Button>
                <LinkTo to={{ pathname: '/register' }}>
                  <Link href="#"  variant="body2">
                    {"Sign up to make a new account."}
                  </Link>
                </LinkTo>
             </Form>
          )}     
        </Formik>
        <Copyright/>
      </div>
      <BackToHome/> 
      <Snackbar 
      ContentProps={{
        classes: {
          root: classes.errorToast
        }
      }}
      message={"Invalid Credentials..."+ (errorMessages && errorMessages.map((value) => {
        return " " + value 
      }))} 
      onClose={() => setErrorToast(false)} 
      open={errorToast} 
      autoHideDuration={5000}
    />
    <Snackbar 
      ContentProps={{
        classes: {
          root: classes.successToast
        }
      }}
      message="Login successful! "
      onClose={() => setSuccessToast(false)} 
      open={successToast} 
      autoHideDuration={6000}
    />
    </div>

  );
}

const validationSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required()
});

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    position: 'fixed',
    height: '100%',
    width: '100%'
  },
  formItem: {
    marginBottom: '20px',
    width:'100%'
  },
  title: {
    margin: '20px'
  },
  submitButton: {
    width: '100%',
    marginTop: '20px',
    marginBottom: '10px'
  },
  copyright: {
    margin:'50px'
  },
  lockIcon:{
    fontSize:15,
    color:'white'
  },avatar:{
    backgroundColor: theme.palette.primary.main,
    width: theme.spacing(4),
    height: theme.spacing(4),
  }
}));