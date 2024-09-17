import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const APITest = () => {
  const [data, setData] = useState([]);
  const getAPIData = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );
      console.log(response.data);

      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    };
      console.log(data);
  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <View>
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={styles.card}>
              <Text>Id: {item.id}</Text>
              <Text>User Id: {item.userId}</Text>
              <Text>Title: {item.title}</Text>
              <Text>Body: {item.body}</Text>
            </View>
          )}
        />
      ) : null}
    </View>
  );
};

export default APITest;

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 10,
    backgroundColor: '#dadada',
  },
});
