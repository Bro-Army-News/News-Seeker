import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import WelcomeScreen from './screens/WelcomeScreen';
import SignUp from './screens/SignUp.js';
import Login from './screens/Login.js';
import Search from './screens/Search.js';
import SettingsMain from './screens/SettingsMain.js';
import DisscussionForum from './screens/DisscussionForum.js';
import HomeScreen from './screens/HomeScreen.js';

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "welcome" component = {WelcomeScreen} title = "Welcome" />
         <Scene key = "signup" component = {SignUp} title = "SignUp" />
         <Scene key = "login" component = {Login} title = "Login" />
         <Scene key = "search" component = {Search} title = "Search" />
         <Scene key = "home" component = {HomeScreen} title = "Home" initial = {true} />
         <Scene key = "discuss" component = {DisscussionForum} title = "DisscussionForum" />         
         <Scene key = "settings" component = {SettingsMain} title = "Settings" />
      </Scene>
   </Router>
)

export default Routes;