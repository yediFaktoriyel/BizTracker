import React, { Component } from 'react';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import homeScreen from "./src/screens/home";
import settingsScreen from "./src/screens/facilitySettings";

const AppNavigator = createStackNavigator(
  {
    home: { screen: homeScreen },
    settings: { screen: settingsScreen },
  },

  {
    initialRouteName: "home",
    headerMode: "screen",
  }
);

export default createAppContainer(AppNavigator);
