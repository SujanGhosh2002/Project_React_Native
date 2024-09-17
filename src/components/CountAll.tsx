import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const CountAll = () => {
  return (
    <View style={styles.countAll}>
      <View style={styles.countLeft}>
        <TouchableOpacity style={styles.countLike}>
          <Text style={styles.countLikeText}>5 Like</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.countRight}>
        <TouchableOpacity style={styles.countComment}>
          <Text style={styles.countCommentText}>5 Comment </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.countRepost}>
          <Text style={styles.countRepostText}> 5 Repost</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CountAll;

const styles = StyleSheet.create({
  countAll: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  countLeft: {},
  countLike: {},
  countLikeText: {},
  countRight: {
    flexDirection: 'row',
  },
  countComment: {},
  countCommentText: {},
  countRepost: {},
  countRepostText: {},
});
