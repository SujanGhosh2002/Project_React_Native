import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from 'twrnc';

const Past = () => {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`bg-orange-600`}>Past</Text>
      <Text style={tw.style('bg-white')}>Past</Text>
      <Text style={tw.style('bg-green-500')}>Past</Text>
    </View>
  );
};

export default Past;

const styles = StyleSheet.create({});
