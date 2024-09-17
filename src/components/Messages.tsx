import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Button,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useAppDispatch, useAppSelector} from '../Redux/hooks';
import {hideMessages} from '../Redux/features/messages/messagesSlice';

const Messages = () => {
  const dispatch = useAppDispatch();
  const messages = useAppSelector(state => state.messages);
  const user = [
    {
      id: 1,
      name: 'Sujan Ghosh',
      lastMessage: 'last message view',
      source: require('../assets/Sujan_Ghosh.png'),
      messageDate: Date.now(),
    },
    {
      id: 2,
      name: 'Sujan Ghosh',
      lastMessage: 'last message view',
      source: require('../assets/Sujan_Ghosh.png'),
      messageDate: Date.now(),
    },
  ];
  const renderItem = ({item, index}: any) => {
    return (
      <TouchableOpacity style={styles.messagesOne}>
        <View style={styles.messageOneImage}>
          <Image source={item.source} style={styles.messageImage} />
        </View>
        <View style={styles.messageOneText}>
          <Text style={styles.messageName}>{item.name}</Text>
          <Text style={styles.messageLastMessage}>{item.lastMessage}</Text>
        </View>
        <TouchableOpacity style={styles.messageDate}>
          <Text style={styles.messageDateText}>{item.messageDate}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };
  return (
    <Modal
      testID={'modal'}
      transparent={true}
      visible={messages}
      animationIn="SlideInRight"
      animationOut="SlideOutRight">
      <View style={styles.container}>
        <View style={styles.modalView}>
          <TouchableOpacity onPress={() => dispatch(hideMessages())}>
            <Icon
              style={styles.icon}
              name="keyboard-backspace"
              size={30}
              color="#0073b1"
            />
          </TouchableOpacity>
          <FlatList
            data={user}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalView: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  messagesOne: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  messageOneImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'blue',
    overflow: 'hidden',
  },
  messageImage: {
    width: '100%',
    height: '100%',
    shadowColor: 'black',
    elevation: 10,
  },
  messageOneText: {
    marginHorizontal: 10,
  },
  messageName: {
    fontSize: 20,
    color: '#000',
  },
  messageLastMessage: {
    fontSize: 15,
  },
  messageDate: {
    position: 'absolute',
    right: 0,
    margin: 10,
  },
  messageDateText: {
    // color: '#0073b1',
  },
  icon: {
    margin: 5,
  },
});
