import { EMAIL_CHANGEDRegister } from '../actions/registerAction.js';
import { PASSWORD_CHANGERegister } from '../actions/registerAction.js';

const INITIAL_STATE = {
  email : '',
  password : ''
}

export default(state = INITIAL_STATE,  action) => {

  switch (action.type) {
    case EMAIL_CHANGEDRegister:
      return {...state, email : action.payload }
      case PASSWORD_CHANGERegister:
        return {...state, password : action.payload }
    default:
    return state;
  }
}
