import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from '../screens/Home';
import Wallet from '../screens/Wallet';
import Profile from '../screens/Profile';
import Activity from '../screens/Activity';
import tw from 'twrnc';

const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#87CEEA',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
            fontSize: 10,
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
            headerShown: true,
            headerTitle: () => (
              // <View>
              <Text style={tw`text-xs pl-1`}>date</Text>
              // </View>
            ),
            headerLeft: () => (
              // <View>
              <Text style={tw`text-xs pl-1`}>Activity</Text>
              // </View>
            ),
            headerRight: () => (
              <View style={tw`flex-row`}>
                <TouchableOpacity style={tw``}>
                  <Icon name="search" size={28} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity style={tw``}>
                  <Icon name="chat" size={28} color="gray" />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Wallet"
          component={Wallet}
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
          name="Activity"
          component={Activity}
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
          name="Profile"
          component={Profile}
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
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
