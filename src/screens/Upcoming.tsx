import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from 'twrnc';

const Upcoming = () => {
  return (
      <View style={tw`flex-1 items-center justify-center`}>
        <Text style={tw`bg-orange-600`}>Upcoming</Text>
        <Text style={tw.style('bg-white')}>Upcoming</Text>
        <Text style={tw.style('bg-green-500')}>Upcoming</Text>
      </View>
  );
};

export default Upcoming;

const styles = StyleSheet.create({});
