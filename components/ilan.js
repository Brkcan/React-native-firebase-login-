import React, {Component} from 'react';
import {View,StyleSheet, Text,Button,Image,TextInput,TouchableOpacity,Platform,ActivityIndicator} from 'react-native';
import { connect } from 'react-redux';
import { ilanChanged, sendIlan,ilanChangedAD,storeReferences} from '../actions/IlanActions.js';
import {Input3} from './common/ilanInput.js';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';
//import fs = require('fs');
import ListItem from './ListImage.js';
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/storage';
const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

export const uploadImage = (uri, mime = 'application/octet-stream') => {

 return new Promise((resolve, reject) => {

  const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
     const sessionId = new Date().getTime()
     let uploadBlob = null
     const imageRef = firebase.storage().ref('img').child(`${sessionId}`)

     fs.readFile(uploadUri, 'base64')
     .then((data) => {
       return Blob.build(data, { type: `${mime};BASE64` })
     })
     .then((blob) => {
       uploadBlob = blob
       return imageRef.put(blob, { contentType: mime })
     })
     .then(() => {
       uploadBlob.close()
         return imageRef.getDownloadURL()
     })
     .then((url) => {
       resolve(url)
     })
     .catch((error) => {
       reject(error)
     })
 })
}
class Ilan extends React.Component{

  constructor(props) {
     super(props)

     state = {
       uploadURL : '',
       image : []
     }
   }


  _pickImage = () => {
    ImagePicker.launchImageLibrary({}, response  => {
      //this.setState({ uploadURL: '' })
        uploadImage(response.uri)
        .then(url => this.setState({ this.props.uploadURL: url }))
        .catch(error => console.log(error))
    })
  }
submitImage = uploadURL => {
  this.setState(stateImage => {
    //uploadImage(response.uri)
    return {
      image : stateImage.image.concat(uploadURL)
    }
  })
}
onIlanChanged(Urun){
  this.props.ilanChanged(Urun);

}
onIlanChangedAD(Ad){
  this.props.ilanChangedAD(Ad);
}
onsendIlan(){
  const  {Urun, Ad} = this.props;
  this.props.sendIlan(Urun,Ad);
    }

  render(){
    const outputImage = this.state.image.map((ima,i) =>(
        <ListItem key={i} uploadURL={ima} />
    ))
    const {uploadURL } = this.props;
    return(
        <View>
          <View>
            <Input3 text='Urun Adı' inputPlaceHolder='Urun Adı'
                    onChangeText ={this.onIlanChanged.bind(this)}
                    value = {this.props.Urun}
          />
          </View>
          <View>
          <Input3 text='Adınız' inputPlaceHolder='Adınız'
                  onChangeText ={this.onIlanChangedAD.bind(this)}
                  value = {this.props.Ad}
        />

        </View>
        <View>
          <Button onPress={this.onsendIlan.bind(this)} title = "İlan Ver" />
        </View>
        <View>
        <TouchableOpacity onPress ={() => this._pickImage()}>
          <Text>Foto</Text>
          </TouchableOpacity>
            </View>
            <View>
              <Image
                source={{ uri: this.state.uploadURL }}
                style={ styles.image }
              />

            </View>
            <Button onPress={this.submitImage.bind(this)} title='FOTOLARI GÖSTER'>
            <Image source={{outputImage}} style={styles.image}></Image>
            </Button>
            </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
   height: 200,
   resizeMode: 'contain',
 }
})
const mapStateToProps = state => {
  const {Urun, Ad } = state.text;
  return {
    Urun, Ad
  }
}
export default
 connect(mapStateToProps,{ilanChanged,sendIlan,ilanChangedAD
                          })
 (Ilan);
