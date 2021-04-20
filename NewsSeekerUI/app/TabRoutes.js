import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MainHome from "./screens/MainHome";
import Search from "./screens/Search";
import DiscussionForum from "./screens/DiscussionForum";

const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => (
  <Tab.Navigator
    initialRouteName="MainHome"
    activeColor="green"
    barStyle={{ backgroundColor: "#e7e6e1" }}
  >
    <Tab.Screen
      name="MainHome"
      component={MainHome}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={Search}
      options={{
        tabBarLabel: "Search",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="magnify" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="DiscussionForum"
      component={DiscussionForum}
      options={{
        tabBarLabel: "Forum",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="forum" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);
export default MyTabs;
