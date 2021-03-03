import React from 'react';
import AppBarThenics from './AppBarThenics';
import axios from 'axios';
import UserProfile from './auth/UserProfile'
export default function Dashboard() {
    const userHandle = () => {
        axios({
            url: process.env.REACT_APP_API_HOST + '/users/user',
            withCredentials: true
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return(
        <React.Fragment>
            <AppBarThenics title={UserProfile.getUsername()}/>
            <button onClick={userHandle}>log user</button>
        </React.Fragment>
    );
}