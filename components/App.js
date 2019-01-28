import React, { Components } from 'react';
import {Text ,View} from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import Banner from './banner.js';
import LoginForm from './loginForm.js';

class App extends React.Component{
componentDidMount(){
	firebase.initializeApp({
		apiKey: 'AIzaSyA5mVFJG9am8_RlWJxYDtjoFDoJ3dRYMos',
		authDomain: 'sahibinden-49786.firebaseapp.com',
		databaseURL: 'https://sahibinden-49786.firebaseio.com',
		projectId: 'sahibinden-49786',
		storageBucket: 'sahibinden-49786.appspot.com',
		messagingSenderId: '233726739360'
	});
}
	render(){
		return (
			<View>
				<Banner text= 'Sahibinden' />
				<LoginForm />
			 </View>

		);
	}
}

export default App;
