import React from 'react';
import {View, Text} from 'react-native';

const ListItem = (props) => (
  <View>
    <Text>{props.uploadURL}</Text>
   </View>
)

export default ListItem;
