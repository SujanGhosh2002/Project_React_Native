import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
<<<<<<< HEAD
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '../Redux/hooks';
import {showSidebar} from '../Redux/features/sidebar/sidebarSlice';
import {showMessages} from '../Redux/features/messages/messagesSlice';
import {showPosts} from '../Redux/features/posts/postsSlice';
import Sidebar from '../components/Sidebar';
import Messages from '../components/Messages';
import Posts from '../components/Posts';
import Search from './Search';
=======
>>>>>>> 3d26925bf784a0775e0de4df1bbd8ba75036963a

const Header = () => {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Sidebar />
      <Messages />
      <Posts />
      <TouchableOpacity
        style={styles.icon}
        onPress={() => dispatch(showSidebar())}>
=======
      <TouchableOpacity style={styles.icon}>
>>>>>>> 3d26925bf784a0775e0de4df1bbd8ba75036963a
        <Icon name="account-circle" size={28} color="#0073b1" />
      </TouchableOpacity>

      <Search />

      <View style={styles.iconContainer}>
<<<<<<< HEAD
        <TouchableOpacity
          onPress={() => dispatch(showPosts())}
          style={styles.icon}>
          <Icon name="add" size={28} color="#0073b1" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(showMessages())}
          style={styles.icon}>
          <Icon name="chat" size={28} color="#0073b1" />
=======
        <TouchableOpacity style={styles.icon}>
          <Icon name="add" size={28} color="#0073b1" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Icon name="more-vert" size={28} color="#0073b1" />
>>>>>>> 3d26925bf784a0775e0de4df1bbd8ba75036963a
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
