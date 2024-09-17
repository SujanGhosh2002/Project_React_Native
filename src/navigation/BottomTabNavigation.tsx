import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
<<<<<<< HEAD
import Footer from '../components/Footer';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from '../screens/Home';
import Gallery from '../screens/Gallery';
import Notifications from '../screens/Notifications';
import Video from '../screens/Video';
import MY_Network from '../screens/MY_Network';
import Puja from '../screens/Puja';
=======
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Gallery from '../screens/Gallery';
import Favorite from '../screens/Favorite';
>>>>>>> 3d26925bf784a0775e0de4df1bbd8ba75036963a

const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#87CEEA',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
<<<<<<< HEAD
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
        {/* <Tab.Screen
=======
            fontSize: 15,
          },
        }}>
        <Tab.Screen
>>>>>>> 3d26925bf784a0775e0de4df1bbd8ba75036963a
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
<<<<<<< HEAD
        /> */}
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
=======
        />
        <Tab.Screen
          name="Favorite"
          component={Favorite}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name="favorite"
>>>>>>> 3d26925bf784a0775e0de4df1bbd8ba75036963a
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
