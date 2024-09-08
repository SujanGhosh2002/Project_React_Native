import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import Main from './Main';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    // <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Main} />
    </Drawer.Navigator>
    // </NavigationContainer>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
