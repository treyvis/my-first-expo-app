import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native'


export default class Study extends Component {
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
            fontSize: 32,
            fontWeight: 'bold',
            fontFamily: 'poppins-black',
            lineHeight: 48,
          }}>
          {this.props.title}
        </Text>
        <Text
          style={{
            color: 'rgb(156, 164,179)',
            fontSize: 12,
            fontWeight: "bold",
            fontFamily: 'poppins-black',
            marginTop: 24,
            marginBottom: 24,
          }}>
          {this.props.questions} questions | <Text style={{ color:  'rgb(219,84,97)' }}> Expires {this.props.expires} </Text>
        </Text>
        <Text
          style={{
            color: 'rgba(42,201,138,1)',
            fontSize: 32,
            fontWeight: "bold",
            fontFamily: 'poppins-black',
            marginBottom: 24,
          }}>
          ${this.props.cost}
        </Text>
        <View
          style={{
            flex: 1,
            height: 2,
            justifyContent: 'flex-start',
            alignItems: 'stretch',
            backgroundColor: "rgba(233,233,233,1)",
            marginBottom: 24,
          }}>
        </View>
      </View>
    )
  }
  
}