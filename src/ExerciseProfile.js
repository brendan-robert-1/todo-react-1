import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
const endpoint = process.env.REACT_APP_API_HOST;
const s3Endpoint = process.env.REACT_APP_S3_PREFACE;
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const ExerciseProfile = (props) => {
  const classes = useStyles();
  const [exercise, setExercise] = React.useState({});
  useEffect(() => {
    const params = {
      params: {
        name:props.location.shortName
      }
    }
    axios.get(endpoint + "/exercise",params)
    .then(function(response){
      const resJson = response.data;
      setExercise(resJson[0]);
    });
  });
  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <Typography variant="h2">{exercise.name}</Typography>
      </Paper>
       {exercise.images && exercise.images.map((value) =>{
          {
            return <Card>
                      <CardMedia
                        className={classes.media}
                        image={s3Endpoint + "/" + value}
                        title={exercise.name}
                      />
                    </Card>
          } 
       })}
    </div>
  );
}

export default ExerciseProfile;
