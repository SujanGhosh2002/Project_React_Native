import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Footer from '../components/Footer';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from './Home';
import Gallery from './Gallery';
import Notifications from './Notifications';
import Video from './Video';
import MY_Network from './MY_Network';
import Puja from './Puja';

const Tab = createBottomTabNavigator();
const Main = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#87CEEA',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
            fontSize: 15,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name="home"
                size={30}
                color={focused ? '#0073b1' : 'gray'}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Video"
          component={Video}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name="smart-display"
                size={30}
                color={focused ? '#0073b1' : 'gray'}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="My Network"
          component={MY_Network}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name="people"
                size={30}
                color={focused ? '#0073b1' : 'gray'}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Gallery"
          component={Gallery}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name="photo"
                size={30}
                color={focused ? '#0073b1' : 'gray'}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name="notifications"
                size={30}
                color={focused ? '#0073b1' : 'gray'}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Puja"
          component={Puja}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name="synagogue"
                size={30}
                color={focused ? '#0073b1' : 'gray'}
              />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Main;

const styles = StyleSheet.create({});
