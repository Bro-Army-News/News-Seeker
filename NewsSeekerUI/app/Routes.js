import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import WelcomeScreen from './screens/WelcomeScreen';
import SignUp from './screens/SignUp.js';
import Login from './screens/Login.js';
import Search from './screens/Search.js';
import SettingsMain from './screens/SettingsMain.js';

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "welcome" component = {WelcomeScreen} title = "Welcome" initial = {true} />
         <Scene key = "signup" component = {SignUp} title = "SignUp" />
         <Scene key = "login" component = {Login} title = "Login" />
         <Scene key = "search" component = {Search} title = "Search" />
         <Scene key = "settings" component = {SettingsMain} title = "Settings" />
      </Scene>
   </Router>
)

export default Routes;