import React from 'react';
import { Formik, Form } from 'formik'
import { Button, Typography, Snackbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import * as yup from 'yup';
import BackToHome from './BackToHome'
import { Link as LinkTo, useHistory } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Copyright from './Copyright';
import TextFieldThenics from './TextFieldThenics';
import axios from 'axios';

// Formik has 3 primary fields we have to set: 
// initialValues which takes an object representing internal state of the form (fields basically)
// onSubmit which is the anon function we want to do when the form is submitted
// validate which is also an anon function the basic pattern is we create an error object that is either empty when we return or has
// values pushed on it based on the field name
// validation schema is another way using yup 
export default function Register() {
  const classes = useStyles();
  const [errorToast, setErrorToast] = React.useState(false);
  const [errorMessages, setErrorMessages] = React.useState();
  const [successToast, setSuccessToast] = React.useState(false);
  const history = useHistory()
  return (
  <div>
    <div className={classes.formContainer}>
      <Typography className={classes.title} variant="h5">Sign Up</Typography>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          passwordConfirmation: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(data, {setSubmitting}) => {
          setSubmitting(true);
          axios.post(process.env.REACT_APP_API_HOST + '/users/register', data)
          .then(res => {
            const successful = res.data.successful;
            console.log('Registration was successful: ', successful);
            if(successful){
              setSuccessToast(true)
            }else{
              setErrorMessages(res.data.errors);
              setErrorToast(true)
            }
          }).catch(err => console.log(err));
          setSubmitting(false);
        }}>
        {({isSubmitting}) => (
            <Form >
              <TextFieldThenics className={classes.formItem} name="username" type="input" label="Username"></TextFieldThenics>
              <TextFieldThenics className={classes.formItem} name="email" type="email" label="Email"></TextFieldThenics>
              <TextFieldThenics className={classes.formItem} name="password" type="password" label="Password"></TextFieldThenics>
              <TextFieldThenics className={classes.formItem} name="passwordConfirmation" type="password" label="Re-enter"></TextFieldThenics>
              <Button className={classes.submitButton} variant="contained" disabled={isSubmitting} type="submit" color="primary">Submit</Button>
              <LinkTo to={{ pathname: '/login' }}>
                  <Link href="#"  variant="body2">
                    {"Already have an account? Sign in."}
                  </Link>
                </LinkTo>
            </Form>
        )}
      </Formik>
      <Copyright/>
    </div>
    <BackToHome />
    <Snackbar 
      ContentProps={{
        classes: {
          root: classes.errorToast
        }
      }}
      message={"Registration failed, Try again..."+ (errorMessages && errorMessages.map((value) => {
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
      message="Registration successful! "
      onClose={() => setSuccessToast(false)} 
      open={successToast} 
      autoHideDuration={6000}
      action={
          <Button color="secondary" size="small" onClick={()=> history.push('/login')}>
            Log in
          </Button>
      }
    />

      
  </div>);
}

// Validation schema
const validationSchema = yup.object({
  username: yup.string().required('Username is required').max(15),
  email: yup.string().required('Email is required').email(),
  password: yup.string().min(6).required('Password is required'),
  passwordConfirmation: yup.string()
    .test('passwords-match', 'Passwords must match', function(value){
      return this.parent.password === value
    })
})

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
  errorToast: {
    backgroundColor:'red',
    color:'white'
  },
  successToast: {
    backgroundColor:'green',
    color:'white'
  }
}));