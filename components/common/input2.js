import React from 'react';
import {View, Text , TextInput, StyleSheet} from 'react-native';

const Input2 = ({text ,inputPlaceHolder,onChangeText,value }) => {

  const {inputWrapper, textStyle, inputTextStyle} = styles;
  return(
    <View  style={inputWrapper}>
      <Text style={textStyle}> {text}</Text>
      <TextInput style={inputTextStyle}
              placeholder = {inputPlaceHolder}
              onChangeText = { onChangeText}
              value = {value}
               />
    </View>
  )
}

const styles = StyleSheet.create({
inputWrapper:{
 flexDirection: 'row',
 height:50,
 width:'auto',
 borderColor:'#E5E5E8',
 borderBottomWidth:1,
 alignItems: 'center'
  },
textStyle:{
flexGrow:1
  },
inputTextStyle:{
flexGrow:2
  }

})

export {Input2}
