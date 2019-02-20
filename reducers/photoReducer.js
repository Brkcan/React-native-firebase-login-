import {PHOTO_ILAN} from '../actions/IlanActions.js';

const INITIAL_STATE = {
  uri : ''
};

export default(state = INITIAL_STATE, action)=>{
  switch (action.type) {
    case PHOTO_ILAN:
      return {...state, uri :action.payload}
        default:
      return state;
  }
}
