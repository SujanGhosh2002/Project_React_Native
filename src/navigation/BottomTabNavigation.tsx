import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Gallery from '../screens/Gallery';
import Favorite from '../screens/Favorite';

const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
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
          name="Favorite"
          component={Favorite}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name="favorite"
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

export default BottomTabNavigation;

const styles = StyleSheet.create({});
