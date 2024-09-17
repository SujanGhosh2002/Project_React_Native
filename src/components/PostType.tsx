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
    <Modal testID={'modal'} transparent={true} visible={sidebar}>
      <View style={styles.centeredView}>
        <View style={styles.notModalView}>
          <TouchableOpacity
            onPress={() => dispatch(hideSidebar())}
            style={styles.not}></TouchableOpacity>
        </View>
        <View style={styles.modalView}></View>
      </View>
    </Modal>
  );
};

export default Sidebar;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  notModalView: {
    width: '100%',
    height: '65%',
  },
  not: {
    width: '100%',
    height: '100%',
  },
  modalView: {
    width: '100%',
    height: '35%',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
});
