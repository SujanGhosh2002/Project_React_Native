import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from 'twrnc';

const Wallet = () => {
  return (
      <View style={tw`flex-1 items-center justify-center`}>
        <Text style={tw`bg-orange-600`}>Wallet</Text>
        <Text style={tw.style('bg-white')}>Wallet</Text>
        <Text style={tw.style('bg-green-500')}>Wallet</Text>
      </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({});

