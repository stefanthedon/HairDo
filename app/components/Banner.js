import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

import ImageOverlay from './ImageOverlay';

export default class Banner extends Component<{}> {
  render() {
    return (
        <ImageBackground source={require('../img/17.jpg')}
            style={styles.banner}>
            
            <ImageOverlay
                header='- HairDo -'
                paragraph='- Your Go-To Hair App -'/>

        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  }
});