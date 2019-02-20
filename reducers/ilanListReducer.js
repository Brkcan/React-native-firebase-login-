import {FETCH_ILAN, STORE_REF} from '../actions/IlanActions.js';

const INITIAL_STATE = {
};

export default(state = INITIAL_STATE,  action) => {
  switch (action.type) {
    case FETCH_ILAN:
      return action.payload
    case STORE_REF:
      return action.payload
    default:
      return state;
  }
}
