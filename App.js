import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from './src/components/CustomTabBar';

import Home from './src/views/Home';
import Search from './src/views/Search';

const Tab = createBottomTabNavigator();

export default function () {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props=><CustomTabBar {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
      </Tab.Navigator>      
    </NavigationContainer>
  );
}