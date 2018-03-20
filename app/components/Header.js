import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';



export default class Header extends Component<{}> {
  render() {
    return (
      <View style={styles.header}>
          <Image
              source={require('../img/3.png')}
              style={styles.cart}
          />
          <Text style={styles.logo}>HairDo</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: '#B39DDB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderBottomWidth: 5,
    borderBottomColor: '#ccc'
  },
  cart: {
    width: 40,
    height: 60
  },
  logo: {
    fontSize: 20,
    marginLeft: 3,
    fontStyle: 'italic',
    color: '#292929'
  }
});