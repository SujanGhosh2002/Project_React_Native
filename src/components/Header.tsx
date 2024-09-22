import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Search from './Search';
import tw from 'twrnc';

const Header = () => {
  return (
    <View style={tw`w-100 h-10 flex-row justify-between`}>
      <View>
        <Text style={tw`text-xs pl-1`}>date</Text>
        <Text style={tw`text-xs pl-1`}>Activity</Text>
      </View>

      {/* <Search /> */}

      <View style={tw`flex-row`}>
        <TouchableOpacity style={tw``}>
          <Icon name="search" size={28} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={tw``}>
          <Icon name="chat" size={28} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
