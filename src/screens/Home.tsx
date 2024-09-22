import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';

const Home = () => {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`bg-orange-600`}>Home</Text>
      <Text style={tw.style('bg-white')}>Home</Text>
      <Text style={tw.style('bg-green-500')}>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
