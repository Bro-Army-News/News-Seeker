import React, { Component } from 'react';
import { AppRegistry, Settings, StyleSheet, Text, View } from 'react-native';
import Routes from './app/Routes.js'
import HomeScreen from './app/screens/HomeScreen';
import { StatusBar } from 'expo-status-bar';
import WelcomeScreen from './app/screens/WelcomeScreen.js';
import SignUp from './app/screens/SignUp.js';
import Login from './app/screens/Login.js';
import Search from './app/screens/Search.js';
import SettingsMain from './app/screens/SettingsMain.js';

class reactNewsApp extends Component {
  render() {
     return (
        <Routes />
     )
  }
}

export default reactNewsApp
AppRegistry.registerComponent('reactNewsApp', () => reactNewsApp)
