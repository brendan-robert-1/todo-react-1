import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import Workout from './Workout';
import Todo from './Todo';
import MyAppBar from './MyAppBar';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends React.Component {
  render(){
    return (
      <CssBaseline>
        <div className="App">
          <Router>
              <MyAppBar title="Home"></MyAppBar>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/todo' component={Todo}/>
                <Route path='/workout' component={Workout}/>
              </Switch>
          </Router>
        </div>
      </CssBaseline>
    );
  }
}
const Home = (props)=> {
  return(
    <h1>Home</h1>
  );
}
export default App;
