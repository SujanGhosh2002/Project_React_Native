import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import C from './C';

const Stack = createNativeStackNavigator();
export default function B() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="C" component={C} />
    </Stack.Navigator>
  );
}
