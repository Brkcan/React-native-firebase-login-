import React, {Components} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import AnasayfaLogin from './anasayfaLogin.js';

class UpdateIlan extends React.Component{

  render(){

    return(
      <View>
      <Text>{this.props.list.list}</Text>


      </View>
    )
  }
}
export default UpdateIlan;
