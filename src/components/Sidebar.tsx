import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useAppDispatch} from '../Redux/hooks';
import {hideSidebar} from '../Redux/features/sidebar/sidebarSlice';

const Sidebar = () => {
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.sidebarContainer}>
        <Text>Sidebar</Text>
        <TouchableOpacity onPress={() => dispatch(hideSidebar())}>
          <Icon name="home" size={28} color="#0073b1" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Sidebar;

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    // height: '100%',
    backgroundColor: 'transparent',
  },
  sidebarContainer: {
    width: '60%',
    height: '100%',
    backgroundColor: 'red',
  },
});
