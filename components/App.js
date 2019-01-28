import React, { Components } from 'react';
import {Text ,View, Button} from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import Banner from './banner.js';
import LoginForm from './loginForm.js';

class App extends React.Component{
state={
	loggedIn : false
}
componentDidMount(){
	firebase.initializeApp({
		apiKey: 'AIzaSyA5mVFJG9am8_RlWJxYDtjoFDoJ3dRYMos',
		authDomain: 'sahibinden-49786.firebaseapp.com',
		databaseURL: 'https://sahibinden-49786.firebaseio.com',
		projectId: 'sahibinden-49786',
		storageBucket: 'sahibinden-49786.appspot.com',
		messagingSenderId: '233726739360'
	});
	firebase.auth().onAuthStateChanged((user) => {
		const loggedIn = user ? true : false;
		this.setState({
			loggedIn
		})
	})
}
	renderContent(){
		const {loggedIn} = this.state;
		if(loggedIn){
			return (
				<Button onPress={() => firebase.auth().signOut()}
				 title = 'Logout' color = '#E87B79'></Button>
			)
		}else{
			return (
				<LoginForm />
			)
		}
	}
	render(){
		return (
			<View>
				<Banner text= 'Sahibinden' />
				{this.renderContent()}
			 </View>
		);
	}
}
export default App;
