import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import tw from 'twrnc';

const Search = () => {
  return (
    <View style={tw``}>
      <TextInput
        style={tw``}
        placeholder="Search"
        placeholderTextColor="gray"
      />
    </View>
  );
};

export default Search;
