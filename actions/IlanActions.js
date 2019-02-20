export const Ilan_Changed = 'ilan_Changed';
export const Ilan_ChangedAD = 'ilan_ChnagedAD';
export const SEND_ILAN = 'send_ilan';
export const FETCH_ILAN = 'fetch_ilan';
export const PHOTO_ILAN = 'photo_ilan';
export const STORE_REF = 'store_ref';

import {Platform} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';
import { Actions } from 'react-native-router-flux';
import firebase from '@firebase/app';
import '@firebase/storage';
import '@firebase/database';


const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

export const ilanChanged = (Urun) => {
  return {
    type : Ilan_Changed,
    payload : Urun
  };
}
export const ilanChangedAD = (Ad) => {
  return {
    type : Ilan_ChangedAD,
    payload : Ad
  };
}
export const ilanChangedSoyad = (Soyad) => {
  return {
    type : Ilan_ChangedSOYAD,
    payload : Soyad
  };
}
export const ilanChangedLokasyon = (Lokasyon) => {
  return {
    type : Ilan_ChangedLOKASYON,
    payload : Lokasyon
  };
}
export const ilanChangedFiyat = (Fiyat) => {
  return {
    type : Ilan_ChangedFIYAT,
    payload : Fiyat
  };
}

export const sendIlan = (Urun,  Ad) => {
  const currentUser = firebase.auth().currentUser;

  const email = currentUser.email;

  return (dispatch) => {

    firebase.database().ref('/profil')
      .push({ email, Urun, Ad })
      .then(() => {
        Actions.anasayfaLogin();
        dispatch({
          type: SEND_ILAN
        })
      })
  }
}
export const fetchIlan = () => {
  return(dispatch) => {
    firebase.database().ref('/profil')
      .on('value', (snapshot) => {
        console.log(snapshot.val())
        dispatch({
          type : FETCH_ILAN,
          payload : snapshot.val()
        })
      })
  }
}
