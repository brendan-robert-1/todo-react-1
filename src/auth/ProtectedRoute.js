import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import UserProfile from './UserProfile';
export default function ProtectedRoute ({component: Component, ...rest}) {
    return(
        <Route 
        {...rest}
        render={props => {
            if(UserProfile.getUsername()){
                console.log('authenticated to view route')
                return <Component {...props} />;
            }else {
                console.log('not authenticated to view route')
                return <Redirect to={{pathname:"/", state:{from: props.location}}}/>
            }
          
        }}
        />
    );
}