import React, {Components} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';

import { Input } from './input.js';

class LoginForm extends React.Component{
state ={
  email : '',
  password : '',
  error : ''
};

onButtonClicked(){
this.setState({error : ''});

  const {email , password} = this.state;
  
firebase.auth().signInWithEmailAndPassword(email, password)
  .then(() => { this.setState({error : ''}); })
  .catch(() => {
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(() => { this.setState({error:''});})
    .catch(()=>{
      this.setState({error: 'giris basarısız'});
    });
  });
}

  render(){
    const {error} = this.state;
    const errorMsg = error ? (
      <Text style = {styles.errorStyle}>
        {error}
      </Text>
    ):
    null;

    return(
      <View style={{padding: 30 }} >

      <View>
        <Input text='Email' inputPlaceHolder='Enter Email'
            onChangeText={(text) => {
              this.setState({
                email:text
              })
            }}
            value={this.state.email}
         />
      </View>

      <View>
      <Input text='Password' inputPlaceHolder='Enter Password'
          onChangeText={(text) => {
            this.setState({
              password:text
            })
          }}
          value={this.state.password}
          />
      </View>
      {errorMsg}
      <View style={styles.buttonWrapper}>
      <Button onPress={this.onButtonClicked.bind(this)} title='Giris'></Button>
      </View>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  buttonWrapper:{
    borderRadius:10,
    marginTop:20,
    backgroundColor:'#fff'
  }
})

export default LoginForm;
