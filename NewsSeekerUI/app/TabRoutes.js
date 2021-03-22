import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './screens/HomeScreen';
import Search from './screens/Search';
import DisscussionForum from './screens/DisscussionForum';
import SettingsMain from './screens/SettingsMain';

const Tab = createMaterialBottomTabNavigator();


const MyTabs = () => (
    <Tab.Navigator
            initialRouteName="Home"
            activeColor="green"
            barStyle={{ backgroundColor: '#e7e6e1' }}
            >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                tabBarLabel: 'Search',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="magnify" color={color} size={26} />
                ),
                }}
            />
            <Tab.Screen
                name="DiscussionForum"
                component={DisscussionForum}
                options={{
                tabBarLabel: 'Forum',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="forum" color={color} size={26} />
                ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsMain}
                options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="cog-outline" color={color} size={26} />
                ),
                }}
            />
        </Tab.Navigator>
    )
 export default MyTabs;