import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Sign_In from '../screens/Sign_In';
import Sign_Up from '../screens/Sign_Up';
import BottomTabNavigation from './BottomTabNavigation';
import DrawerNavigation from './DrawerNavigation';
import {A} from './A';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator> */}
      {/* <Stack.Screen
          name="Sign_Up"
          component={Sign_Up}
          options={{headerShown: false}}
        /> */}
      {/* <Stack.Screen
          name="Sign_In"
          component={Sign_In}
          options={{headerShown: false}}
        /> */}
      {/* <Stack.Screen
          name="BottomTabNavigation"
          component={BottomTabNavigation}
          options={{headerShown: false}}
        /> */}
      {/* </Stack.Navigator> */}
      <A />
      {/* <DrawerNavigation /> */}
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
