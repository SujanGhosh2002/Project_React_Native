import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Search = () => {
  return (
    <View style={styles.searchBar}>
      <Icon name="search" size={20} color="#0073b1" />
      <TextInput
        placeholder="Search"
        placeholderTextColor="#0073b1"
        style={styles.searchInput}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    flex: 1,
    marginLeft: 10,
  },
  searchInput: {
    marginLeft: 5,
    flex: 1,
    fontSize: 16,
  },
});
