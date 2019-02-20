import React, {Components} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
//import Register from './register.js';
import { connect } from 'react-redux';
import { emailChanged , passwordChanged, loginUser } from '../actions/index.js';
import firebase from '@firebase/app';
import '@firebase/auth';


import { Input } from './common/input.js'

class LoginForm extends React.Component{

onButtonClicked(){


const {email , password} = this.props;

this.props.loginUser(email, password);
}

onEmailChanged(text){
  this.props.emailChanged(text);
}
onPasswordChanged(text){
  this.props.passwordChanged(text);
}

  render(){
    const {error} = this.props;
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
            onChangeText={this.onEmailChanged.bind(this)}
            value={this.props.email}
         />
      </View>

      <View>
      <Input text='Password' inputPlaceHolder='Enter Password'
          onChangeText={this.onPasswordChanged.bind(this)}
          value={this.props.password}
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
});

const mapStateToProps = state => {
  const {email, password,error} = state.login;
  return{
    email,  password, error
  }
}

export default connect(mapStateToProps, {emailChanged,
   passwordChanged, loginUser})(LoginForm);
