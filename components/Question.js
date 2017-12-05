import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native'


export default class Question extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'stretch',
          backgroundColor: "rgb(255,255,255)",
          shadowColor: 'rgba(0,0,0,.1)',
          borderRadius: 8,
          shadowOffset: {
            width:0, height: 2
          },
          padding: 24,
          shadowRadius: 8,
          shadowOpacity: 1,
          marginBottom: 32
        }}>
        <Text
          style={{
            color: 'rgb(45, 53, 63)',
            fontSize: 18,
            fontWeight: 'bold',
            fontFamily: 'poppins-black',
            lineHeight: 28,
          }}>
          How do you manage your active clientele?
        </Text>
      </View>
    )
  }
}