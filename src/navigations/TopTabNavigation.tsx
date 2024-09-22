import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Upcoming from '../screens/Upcoming';
import Past from '../screens/Past';

const Tab = createBottomTabNavigator();
const TopTabNavigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Upcoming" component={Upcoming} />

        <Tab.Screen name="Past" component={Past} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TopTabNavigation;

const styles = StyleSheet.create({});
