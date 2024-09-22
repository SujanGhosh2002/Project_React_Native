import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/MaterialIcons';

const cardInformation = [
  {
    id: 1,
    image: require('..//assets/v.png'),
    name: 'Sujan Ghosh',
    time: '11:40 - 12:40PM . 1 hr',
    username: 'Sujan Ghosh',
    price: 2000,
    capacity: 9 / 10,
  },
  {
    id: 2,
    image: require('..//assets/v2.png'),
    name: 'Suman Ghosh',
    time: '11:40 - 12:40PM . 1 hr',
    username: 'Suman Ghosh',
    price: 2000,
    capacity: 9 / 10,
  },

  {
    id: 3,
    image: require('..//assets/v3.png'),
    name: 'Suman Ghosh',
    time: '11:40 - 12:40PM . 1 hr',
    username: 'Suman Ghosh',
    price: 2000,
    capacity: 9 / 10,
  },
];

const ActivityCard = () => {
  const renderItem = ({item, index}: any) => {
    return (
      <View
        style={tw`bg-white w-100 h-35 m-1.5 px-2 py-3 relative flex-row rounded shadow-md`}>
        <View style={tw`w-2/4 h-full pr-2`}>
          <Image style={tw`w-full h-full rounded`} source={item.image} />
        </View>
        <View style={tw`w-2/4 h-full`}>
          <Text style={tw`text-xl`}>{item.name}</Text>
          <View style={tw`flex-row items-center`}>
            <Icon name="timer" size={10} color="gray" />
            <Text style={tw`text-xs pl-1`}>{item.time}</Text>
          </View>
          <View style={tw`flex-row items-center`}>
            <Icon name="timer" size={10} color="gray" />
            <Text style={tw`text-xs pl-1`}>{item.username}</Text>
          </View>
          <View style={tw`flex-row items-center`}>
            <Icon name="wallet" size={10} color="gray" />
            <Text style={tw`text-xs pl-1`}>{item.price}</Text>
          </View>
          <View style={tw`flex-row items-center`}>
            <Icon name="timer" size={10} color="gray" />
            <Text style={tw`text-xs pl-1`}>{item.capacity}</Text>
          </View>
          <TouchableOpacity
            style={tw`bg-red-100 w-full h-6  items-center justify-center rounded shadow`}>
            <Text style={tw`text-xs pl-1`}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <>
      {
        <FlatList
          data={cardInformation}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id}
        />
      }
    </>
  );
};

export default ActivityCard;

const styles = StyleSheet.create({});
