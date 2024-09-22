import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from 'twrnc';
import ActivityCard from "../components/ActivityCard";
import Header from "../components/Header";

const Activity = () => {
  return (
    <View>
      <Header/>
      <ActivityCard />
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({});
