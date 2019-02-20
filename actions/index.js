import firebase from '@firebase/app';
import '@firebase/auth';

import {Actions} from 'react-native-router-flux';

export const EMAIL_CHANGED = 'email_Changed';
export const PASSWORD_CHANGE = 'password_Changed';
export const LOGİN_USER_SUCCESS = 'login_user_success';
export const LOGİN_USER_FAILED =  'login_user_failed';
export const LOGIN = 'login';

export const emailChanged = (text) => {
  return {
    type : EMAIL_CHANGED,
    payload: text
  };
}
export const passwordChanged = (text) => {
  return {
    type : PASSWORD_CHANGE,
    payload: text
  };
}

export const loginUser = (email, password) =>{
  return(dispatch) => {
    dispatch({
      type : LOGIN
    });
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginSuccess(dispatch, user))
    .catch(() => loginfail(dispatch))
  }
}

const loginSuccess = (dispatch, user) => {
  dispatch({
    type: 'LOGİN_USER_SUCCESS',
    payload : user
  })
Actions.Profil();
}

const loginfail = (dispatch) => {
  dispatch({
    type : LOGİN_USER_FAILED
  })
}
