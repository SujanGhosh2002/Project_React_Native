import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from 'twrnc';

const Profile = () => {
  return (
      <View style={tw`flex-1 items-center justify-center`}>
        <Text style={tw`bg-orange-600`}>Profile</Text>
        <Text style={tw.style('bg-white')}>Profile</Text>
        <Text style={tw.style('bg-green-500')}>Profile</Text>
      </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});

