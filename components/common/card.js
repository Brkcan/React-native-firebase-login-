import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.cardWrapper}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  cardWrapper: {
    flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 25,
      margin: 2,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: '#d2f7f1'
  }
});

export { Card };
