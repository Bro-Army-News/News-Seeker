import React, { Component } from 'react';
import { AppRegistry, Settings, StyleSheet, Text, View } from 'react-native';
import Routes from './app/Routes.js'
import TabRoutes from './app/TabRoutes';
import { NavigationContainer } from '@react-navigation/native';

class reactNewsApp extends Component {
  render() {
     return (
        <NavigationContainer>
            <Routes >
               <TabRoutes/>
            </Routes>
        </NavigationContainer>
     )
  }
}

export default reactNewsApp
AppRegistry.registerComponent('reactNewsApp', () => reactNewsApp)
