import { EMAIL_CHANGED } from '../actions/index.js';
import {
  PASSWORD_CHANGE,
  LOGİN_USER_SUCCESS ,
  LOGİN_USER_FAILED
}
 from '../actions/index.js';

const INITIAL_STATE = {
  email : '',
  password : '',
  user : {},
  error: ''
}

export default(state = INITIAL_STATE,  action) => {

  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email : action.payload }
      case PASSWORD_CHANGE:
        return {...state, password : action.payload }
      case LOGİN_USER_SUCCESS:
        return {...state, ...INITIAL_STATE,  user: action.payload }
      case LOGİN_USER_FAILED:
        return {...state, error : ' hatalı '}
    default:
    return state;
  }
}
