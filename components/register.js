import React,{Components} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import { connect }  from  'react-redux';
import { emailChanged , passwordChanged} from '../actions/registerAction.js';
import firebase from '@firebase/app';
import '@firebase/auth';

import {Input2} from './common/input2.js';

 class Register extends React.Component{
state={
  email : '',
  password : '',
  error : ''
};
onButtonCreate(){
this.setState({error :''});

const {email ,password, adres, telefon } = this.props;

  firebase.auth().createUserWithEmailAndPassword(email,password)
  .then(() => {this.setState({error:'basarılı giriş'});})
  .catch(() => {this.setState({error:'Kayıt basarısız'});
  });

}
onEmailChangedRegister(text){
  this.props.emailChanged(text);
}
onPasswordChangedRegister(text) {
  this.props.passwordChanged(text);
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
      <Input2 text='Email' inputPlaceHolder='Enter Email'
          onChangeText={this.onEmailChangedRegister.bind(this)}
          value={this.props.email}
       />
    </View>

    <View>
    <Input2 text='Password' inputPlaceHolder='Enter Password'
        onChangeText={this.onPasswordChangedRegister.bind(this)}
        value={this.props.password}
        />
    </View>
    {errorMsg}
    <View style={styles.buttonWrapper}>
    <Button onPress={this.onButtonCreate.bind(this)} title='Kayıt'></Button>
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

const mapStateToProps = state => {
  const {email, password} = state.register;
  return {
    email ,password
  }
}

 export default connect(mapStateToProps, {emailChanged,
                          passwordChanged})(Register);
