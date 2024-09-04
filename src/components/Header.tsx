import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '../Redux/hooks';
import {showSidebar} from '../Redux/features/sidebar/sidebarSlice';

const Header = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => dispatch(showSidebar())}>
        <Icon name="account-circle" size={28} color="#0073b1" />
      </TouchableOpacity>

      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="#0073b1" />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#0073b1"
          style={styles.searchInput}
        />
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.icon}>
          <Icon name="my-library-add" size={28} color="#0073b1" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Icon name="chat" size={28} color="#0073b1" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
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
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default Header;
