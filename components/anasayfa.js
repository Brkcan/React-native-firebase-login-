import React, { Components } from 'react';
import {View,StyleSheet, Text, Button,FlatList,TouchableOpacity,ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { fetchIlan } from '../actions/IlanActions.js'
import {Actions} from 'react-native-router-flux';
import {Card} from './common/card.js';
import Ilan from './ilan.js';
import _ from 'lodash';
import DrawerLayout from 'react-native-drawer-layout';
import ActionBar from 'react-native-action-bar';
import Menu from './common/Menu.js';

const menuList = require('./common/constants.js')

class Anasayfa extends React.Component{

    constructor(props) {
       super(props);
       this.state = {
         drawerClosed: true,
       };
       this.toggleDrawer = this.toggleDrawer.bind(this);
       this.setDrawerState = this.setDrawerState.bind(this);
     }

     setDrawerState() {
       this.setState({
         drawerClosed: !this.state.drawerClosed,
       });
     }

     toggleDrawer = () => {
       if (this.state.drawerClosed) {
         this.DRAWER.openDrawer();
       } else {
         this.DRAWER.closeDrawer();
       }
     }

  componentDidMount(){
    this.props.fetchIlan();
  }

  renderItem({item}){
    return(
      <TouchableOpacity key={item.uid}
                        onPress={() => {
                          Actions.Updateilan({
                            list : item
                          })
                        }}    >
        <Card>
          <Text>{item.Urun}</Text>
          <Text>{item.email}</Text>
          <Text>{item.Ad}</Text>
          

        </Card>
        </TouchableOpacity>
    )
  }

  render(){
    const {list} = this.props;
    return(
      <View>
      <DrawerLayout
        drawerWidth={300}
        ref={drawerElement => {
          this.DRAWER = drawerElement;
        }}
        drawerPosition={DrawerLayout.positions.left}
        onDrawerOpen={this.setDrawerState}
        onDrawerClose={this.setDrawerState}
        renderNavigationView={() => <Menu />}
      >
        <ActionBar
          containerStyle={styles.bar}
          backgroundColor="#33cc33"
          leftIconName={'menu'}
          onLeftPress={this.toggleDrawer}/>

      </DrawerLayout>
      <View>

        <FlatList data={list}
                  renderItem={this.renderItem}
                  keyExtractor={(item) => item.uid} />
      </View>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#33cc33',
    flex: 1,
    paddingTop: 10,
    alignItems: 'center',
    //padding: 10
  },
});
const mapStateToProps = state => {
  const list = _.map(state.list, (val, uid) => {
    return { ...val, uid }
  });

  return {
    list
  }
}
export default connect(mapStateToProps,{fetchIlan})(Anasayfa);
