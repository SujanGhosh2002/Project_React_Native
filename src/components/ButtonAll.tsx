import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ButtonAll = () => {
  return (
    <View style={styles.allButton}>
      <TouchableOpacity style={styles.button}>
        <Icon style={styles.buttonIcon} name="home" size={15} color="#0073b1" />
        <Text style={styles.buttonText}>Like</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon
          style={styles.buttonIcon}
          name="comment"
          size={15}
          color="#0073b1"
        />
        <Text style={styles.buttonText}>Comment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon style={styles.buttonIcon} name="home" size={15} color="#0073b1" />
        <Text style={styles.buttonText}>Repost</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon style={styles.buttonIcon} name="send" size={15} color="#0073b1" />
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonAll;

const styles = StyleSheet.create({
  allButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 6,
    borderBottomColor: 'gray',
  },
  button: {
    paddingVertical: 5,
  },
  buttonIcon: {
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 10,
  },
});
