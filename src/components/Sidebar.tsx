import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Button,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useAppDispatch, useAppSelector} from '../Redux/hooks';
import {hideSidebar} from '../Redux/features/sidebar/sidebarSlice';

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const sidebar = useAppSelector(state => state.sidebar);
  return (
    <Modal
      testID={'modal'}
      transparent={true}
      visible={sidebar}
      animationIn="SlideInLeft"
      animationOut="SlideOutLeft">
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.profile}>
            <TouchableOpacity
              onPress={() => console.warn('profile')}
              style={styles.profileLink}>
              <View style={styles.profilePart}>
                <View style={styles.profileImage}>
                  <Image
                    style={styles.image}
                    source={require('../assets/Sujan_Ghosh.png')}
                  />
                </View>
                <Text style={styles.profileName}>Sujan Ghosh</Text>
                <Text style={styles.profileText}>View Profile</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.profileViewers}>profile viewers</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.middlePart}>
            <TouchableOpacity>
              <Text style={styles.savePosts}>Save Posts</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.groups}>groups</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => console.warn('settings')}
            style={styles.settings}>
            <View style={styles.settingsTextPart}>
              <Icon
                style={styles.settingsIcon}
                name="settings"
                size={25}
                color="#0073b1"
              />
              <Text style={styles.settingsText}>Settings</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.notModalView}>
          <TouchableOpacity
            onPress={() => dispatch(hideSidebar())}
            style={styles.not}></TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Sidebar;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalView: {
    width: '70%',
    height: '100%',
    backgroundColor: '#fff',
    shadowColor: 'black',
    elevation: 10,
    justifyContent: 'space-between',
  },
  profile: {
    width: '100%',
    // height: '25%',
    borderBottomWidth: 2,
    borderBottomColor: '#dadada',
  },
  profileLink: {
    paddingLeft: 20,
  },
  profilePart: {},
  profileImage: {
    marginTop: 20,
    marginBottom: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    shadowColor: '#000',
    elevation: 10,
  },
  profileName: {
    fontSize: 25,
    color: '#000',
  },
  profileText: {},
  image: {
    width: '100%',
    height: '100%',
  },
  profileViewers: {
    paddingLeft: 20,
    marginTop: 25,
    marginBottom: 10,
    fontSize: 15,
  },
  middlePart: {
    flex: 1,
  },
  savePosts: {
    padding: 20,
    color: '#000',
    fontSize: 25,
  },
  groups: {
    padding: 20,
    color: '#000',
    fontSize: 25,
  },
  settings: {
    width: '100%',
    height: '15%',
    borderTopWidth: 2,
    borderTopColor: '#dadada',
    padding: 20,
  },
  settingsTextPart: {
    flexDirection: 'row',
  },
  settingsIcon: {
    alignSelf: 'center'
  },
  settingsText: {
    paddingLeft:5,
    color: '#000',
    fontSize: 25,
    textAlign: 'center',
  },
  notModalView: {
    width: '30%',
    height: '100%',
    // position: 'absolute',
    // right: 0,
  },
  not: {
    width: '100%',
    height: '100%',
  },
});
