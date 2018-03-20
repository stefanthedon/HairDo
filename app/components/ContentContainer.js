import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import CustomImage from './CustomImage';

export default class ContentContainer extends Component<{}> {
  render() {
    return (
      <View style={styles.contentContainer}>

          <View style={styles.col1}>
              <CustomImage 
                  imageSource={require('../img/3.jpg')}
                  header='Curls'
              />
          </View>

          <View style={styles.col2}>
              <CustomImage 
                  imageSource={require('../img/10.jpg')}
                  header='Brunette'
              />
          </View>

          <View style={styles.contentBanner}>
              <CustomImage 
                  imageSource={require('../img/15.jpg')}
                  header='Latest Syles'
              />
          </View>

          <View style={styles.col2}>
              <CustomImage 
                  imageSource={require('../img/18.jpg')}
                  header='Blonde'
          />
          </View>

          <View style={styles.col1}>
              <CustomImage 
                  imageSource={require('../img/6.jpg')}
                  header='Men'
          />
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 2,
  },
  col1: {
    flex: 1,
    padding: 2,
  },
  col2: {
    flex: 2,
    padding: 2,
  },
  contentBanner: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  }
});