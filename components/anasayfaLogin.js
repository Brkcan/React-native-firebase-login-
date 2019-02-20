import React, { Components } from 'react';
import {View, Text, Button,FlatList,TouchableOpacity,Image} from 'react-native';
import { connect } from 'react-redux';
import { fetchIlan} from '../actions/IlanActions.js'
import {Actions} from 'react-native-router-flux';
import {Card} from './common/card.js';
import Banner from './common/banner.js';
import Ilan from './ilan.js';
import _ from 'lodash';
import {uploadImage} from './ilan.js';



class AnasayfaLogin extends React.Component{
  state = {
    uploadURL :''
  }
  componentDidMount(){
    this.props.fetchIlan();
  }

  renderItem({item}){
    return(
      <TouchableOpacity key={item.uid}
                        onPress={() => {
                          Actions.Updateilan
                          ({
                            list : item,
                          })
                        }}>
        <Card>
          <Text>{item.Urun}</Text>
          <Text>{item.email}</Text>
          <Text>{item.Ad}</Text>
          <Image source={this.props.uploadURL}>{item.uploadURL}</Image>
        </Card>
        </TouchableOpacity>
    )
  }
  render(){
    const {list} = this.props;
    return(

      <View>

        <FlatList data={list}
                  renderItem={this.renderItem}
                  keyExtractor={(item) => item.uid} />

      </View>
    )
  }
}
const mapStateToProps = state => {
  const list = _.map(state.list, (val, uid) => {
    return { ...val, uid }
  });
  return {
    list
  }
}
export default connect(mapStateToProps,{fetchIlan})(AnasayfaLogin);
