import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Button,
  TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useAppDispatch, useAppSelector} from '../Redux/hooks';
import {hidePosts} from '../Redux/features/posts/postsSlice';

const Posts = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(state => state.posts);
  return (
    <Modal
      testID={'modal'}
      transparent={true}
      visible={posts}
      animationIn="SlideInRight"
      animationOut="SlideOutRight">
      <View style={styles.container}>
        <View style={styles.modalView}>
          <View style={styles.heading}>
            <View style={styles.headingLeft}>
              <TouchableOpacity
                style={styles.headingLeftClear}
                onPress={() => dispatch(hidePosts())}>
                <Icon name="clear" size={30} color="#0073b1" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.headingLeftAnyone}
                onPress={() => console.warn('Anyone')}>
                <Text style={styles.anyoneText}>Anyone</Text>
                <Icon name="arrow-drop-down" size={30} color="#0073b1" />
              </TouchableOpacity>
            </View>
            <View style={styles.headingRight}>
              <TouchableOpacity
                style={styles.headingRightTimer}
                onPress={() => console.warn('Timer')}>
                <Icon name="timer" size={30} color="#0073b1" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.headingRightPost}
                onPress={() => console.warn('Post')}>
                <Text style={styles.postText}>Post</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Share Your thoughts..."
              placeholderTextColor={'#0073b1'}
            />
          </View>
          <View style={styles.postType}>
            <TouchableOpacity
              onPress={() => console.warn('image')}
              style={styles.postImage}>
              <Icon name="image" size={28} color="#0073b1" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => console.warn('plus')}
              style={styles.postTypeAdd}>
              <Icon name="add" size={28} color="#0073b1" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Posts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalView: {
    paddingHorizontal: 10,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingLeftClear: {
    paddingVertical: 10,
  },
  headingLeftAnyone: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  anyoneText: {
    color: '#000',
  },
  headingRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingRightTimer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headingRightPost: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#0073b1',
    alignSelf: 'center',
    borderRadius: 15,
  },
  postText: {
    color: '#fff',
  },
  textInput: {
    width: '100%',
    height: '85%',
    // backgroundColor: 'red',
    paddingBottom: 450,
  },
  postType: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  postImage: {
    marginHorizontal: 20,
  },
  postTypeAdd: {
    marginLeft: 5,
  },
});
