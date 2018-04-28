import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login1 from './user/login';
import Signup from './user/register';
import Profile from './user/profile';
export default class Routes extends React.Component {
    render() {
        return(
            <Router>
            <Stack key="root" hideNavBar={true}>
            <Scene key="login" component={Login1} title="Login" initial={true}/>
            <Scene key="signup" component={Signup} title="Register"/>
            <Scene key="profile" component={Profile} title="Profile"/>
            </Stack>
            </Router>
    )
    }
}