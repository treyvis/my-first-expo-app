import React, { Component } from 'react';

import Study from '../components/Study'

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native'


export default class Studies extends Component {
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
          }}
          >
        <Text
          style={{
            color:  'rgb(45, 53, 63)',
            fontSize: 32,
            lineHeight:  32,
            fontWeight:  'bold', 
            fontFamily:  'poppins-black' ,
            paddingTop: 54,
            marginBottom: 32,
          }}>
          Your Studies
        </Text>
          {(this.props.studies || []).map((study, i) => (
            <Study key={i} {...study}></Study>
          ))}
        </ScrollView>
      </View>
    )
  }
}