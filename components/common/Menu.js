import React, { Component, PropTypes } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';


const menuList = require('./constants.js');

export default class Menu extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          {menuList.Menu_list.map(item => (
            <TouchableOpacity
              key={item.index}
              onPress={() => console.log('menu')}
            >
              <Text>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}
