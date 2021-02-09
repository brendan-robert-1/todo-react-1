import React from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
const endpoint = process.env.REACT_APP_API_HOST;
const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(1),
          padding: '20px',
          paddingRight:'200px'
        },
      },
      exercise: {
        '& > *': {
            margin:"10px"
          },
      }
  });
class Workout extends React.Component  { 
    constructor(props){
        super(props);
        this.state= {
          workout:{}
        }
      }
    componentDidMount(){
        axios.get(endpoint + '/workout')
        .then(res =>{
            const resJson = res.data;
            this.setState({workout: resJson})
        });
    }
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                <Paper elevation={3}>
                    <Typography variant="h2">{this.state.workout.dayOfWeek}:&nbsp;{this.state.workout.name}</Typography>
                    <Link to={{pathname: '/exercise-profile', shortName:"pullup"}}>
                        <Typography variant="subtitle1">          
                        {this.state.workout.targets && this.state.workout.targets.map((value, index) =>{
                            {return (index ? ', ' : '') + value} 
                        })}
                        </Typography>
                    </Link>
                    <Divider/>  
                    {this.state.workout.exercises && this.state.workout.exercises.map((value) =>{
                        return(
                            <Excercise excercise={value} classes={classes}></Excercise>
                        );
                    })

                    }
                </Paper>
            </div>
        );
    }
}

const Excercise = (props) =>{
    return(
        <div className={props.classes.exercise}>
            <Typography variant="h6">{props.excercise.name}</Typography>
            <Typography variant="body1">{props.excercise.sets} sets of {props.excercise.reps} reps {props.excercise.weight} {props.excercise.weightUnit} {props.excercise.rest} {props.excercise.restUnit} rest
            </Typography>
            <Divider/>  
        </div>
        
    )
};
export default withStyles(styles, { withTheme: true })(Workout);
 
