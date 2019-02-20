import { combineReducers } from 'redux';
import LoginReducer from './loginReducer.js';
import RegisterReducer from './registerReducer.js';
import IlanReducers from './ilanReducer.js';
import IlanListReducer from './ilanListReducer.js';
import PhotoReducer from './photoReducer.js';
//import loginReducer from ''


export default combineReducers({
  login : LoginReducer,
  register : RegisterReducer,
  text  :IlanReducers,
  list : IlanListReducer,
  photo : PhotoReducer
});
