import {Ilan_Changed,
  SEND_ILAN,
  Ilan_ChangedAD,Ilan_ChangedSOYAD,Ilan_ChangedLOKASYON,Ilan_ChangedFIYAT
} from '../actions/IlanActions.js';

const INITIAL_STATE  = {
  Urun : '',
  Ad : '',
  Soyad : '',
  Lokasyon : '',
  Fiyat : ''
}

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Ilan_Changed:
        return {...state, Urun : action.payload}
    case Ilan_ChangedAD:
        return {...state, Ad: action.payload}
    case Ilan_ChangedSOYAD:
        return {...state, Soyad: action.payload}
    case Ilan_ChangedLOKASYON:
        return {...state, Lokasyon: action.payload}
    case Ilan_ChangedFIYAT:
        return {...state, Fiyat: action.payload}
    case SEND_ILAN:
        return {...state, ...INITIAL_STATE}
    default:
    return state;

  }
}
