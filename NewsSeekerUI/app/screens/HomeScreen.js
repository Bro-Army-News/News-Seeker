import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
//import {navigationContainer} from '@react-navigation/native';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import {Ionicons} from '@expo/vector-icons';
import Search from './Search';
import SettingsMain from './SettingsMain';


function HomeScreen() {
return (
<View style={styles.container}>
<View style={styles.header}>
<Text style={styles.title}>News Seeker</Text>
</View>
<View style={styles.content}></View>
{/*<NavigationContainer>
<Tab.Navigator
screenOptions={({ route }) => ({
tabBarIcon: ({ focused, color, size }) => {
if (route.name === 'Home') {
return (
<Ionicons
name={
focused
? 'ios-information-circle'
: 'ios-information-circle-outline'
}
size={size}
color={color}
/>
);
} else if (route.name === 'Settings') {
return (
<Ionicons
name={focused ? 'ios-list-box' : 'ios-list'}
size={size}
color={color}
/>
);
}
},
})}
tabBarOptions={{
activeTintColor: 'tomato',
inactiveTintColor: 'gray',
}}
>
<Tab.Screen name="Home" component={HomeScreen} options={{ tabBarBadge: 3 }} />
<Tab.Screen name="Settings" component={SettingsMain} />
</Tab.Navigator>
</NavigationContainer>/*}
{/*<Button
title="Home"
onPress={
() => this.props.navigation.navigate("HomeScreen")
}>
</Button>
<Button
title="Search"
onPress={
() => this.props.navigation.navigate("Search")
}>
</Button>
<Button
title="Settings"
onPress={
() => this.props.navigation.navigate("SettingsMain")
}>
</Button>*/}
{/*<View style={styles.tabs_container}>
<IconButton icon="" />
<IconButton icon="" />
<IconButton icon="" />
</View>
<View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}><Text>My fixed footer</Text></View>*/}
</View>
);}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    },
    header: {
    height: 100,
    paddingTop: 38,
    backgroundColor: 'black'
    },
    title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
    }
    });
    export default HomeScreen;
/*
{const Routes = () => (
<Router>
<Scene key = "root">
<Scene key = "home" component = {HomeScreen} title = "Home" initial = {true} />
<Scene key = "search" component = {Search} title = "Search" />
<Scene key = "setting" component = {SettingsMain} title = "Setting" />
</Scene>
</Router>
)}*/