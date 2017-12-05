import React, { Component } from 'react';

import Question from '../components/Question.js';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native'


export default class Questions extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'stretch',
          backgroundColor: "rgba(255,255,255,1)",
          ...this.props.style
        }}>
        <ScrollView 
          horizontal={false}
          style={{
            paddingRight: 24,
            paddingLeft: 24,
          }}>
        <View style={{
          paddingTop: 54,
          paddingBottom: 24,
          flexDirection: 'row'
        }}>
          <Image style={{
            marginRight: 12
          }} source={require("../assets/images/back-arrow.png")} />
          <Text style={{
            color: '#3679FB',
            fontSize: 16,
            fontFamily: 'poppins-black',
            lineHeight: 28
          }}>
            Back to studies
          </Text>
        </View>
        <Text
          style={{
            color:  'rgb(45, 53, 63)',
            fontSize: 32,
            lineHeight:  48,
            fontWeight:  'bold', 
            fontFamily:  'poppins-black' ,
            marginBottom: 16,
          }}>
          Managing tax clientele efficiently
        </Text>
        <Question />
        </ScrollView>
      </View>
    )
  }
}