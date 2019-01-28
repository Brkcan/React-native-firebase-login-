import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Banner extends React.Component{
  render(){
    return(
      <View style = {styles.bannerContainer}>
        <Text style = {styles.bannerText}>{this.props.text}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
bannerContainer:{
width:'auto',
height:100,
backgroundColor:'#e5b900',
justifyContent: 'center',
alignItems: 'center'
},
bannerText:{
fontSize: 20,
color: '#fff'
}
})

export default Banner;
