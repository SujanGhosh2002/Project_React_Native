import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

const H = () => {
  return <Text>H</Text>;
};

const Stack = createNativeStackNavigator();
const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="H" component={H} />
    </Stack.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({});
