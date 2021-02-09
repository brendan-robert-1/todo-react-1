import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Workout from './Workout';
import CssBaseline from '@material-ui/core/CssBaseline';
import ExerciseProfile from './ExerciseProfile';
import AddExercise from './addcontent/AddExercise';
import Login from './auth/Login';
import Register from './auth/Register';
import Landing from './Landing';
import Dashboard from './Dashboard';
import { createMuiTheme } from '@material-ui/core/styles';

class App extends React.Component {
  render(){
    return (
      <CssBaseline>
        <div className="App">
          <Router>
              <Switch>
                <Route exact path='/' component={Landing}/>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/workout' component={Workout}/>
                <Route path='/exercise-profile' component={ExerciseProfile}/>
                <Route path='/add-exercise' component={AddExercise}/>
                <Route path='/github' component={() => { 
                  window.location.href = 'https://github.com/brendan-robert-1'; 
                  return null;
                  }}/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
              </Switch>
          </Router>
        </div>
      </CssBaseline>
    );
  }
}
const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#4F000E',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

export default App;
