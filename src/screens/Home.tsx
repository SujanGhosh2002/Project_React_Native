import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import tw from 'twrnc';
import Sidebar from '../components/Sidebar';
import {useAppSelector} from '../Redux/hooks';

const Home = () => {
  const sidebar = useAppSelector(state => state.sidebar);
  console.log(sidebar);
  return (
    <View>
      {sidebar ? <Sidebar /> : null}
      <View>
        <Header />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
