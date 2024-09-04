import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {useAppDispatch, useAppSelector} from '../Redux/hooks';
import {decrement, increment} from '../Redux/features/counter/countSlice';

const Count = () => {
  const count = useAppSelector(state => state.count);
  const dispatch = useAppDispatch();
  return (
    <View>
      <Text>User: {count}</Text>
      <Button title="+" onPress={() => dispatch(increment())} />
      <Button title="-" onPress={() => dispatch(decrement())} />
    </View>
  );
};

export default Count;
