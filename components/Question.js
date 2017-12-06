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
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'stretch',
          backgroundColor: "rgb(255,255,255)",
          shadowColor: 'rgba(0,0,0,.1)',
          borderRadius: 8,
          shadowOffset: {
            width:0, height: 2
          },
          padding: 16,
          shadowRadius: 8,
          shadowOpacity: 1,
          marginBottom: 32,
          minHeight: 216
        }}>
        <View style={{
          flex: 3,
          flexDirection: 'column',
          backgroundColor: '#F1F1F1',
          borderRadius: 4,
          marginRight: 16
        }}>
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image source={require("../assets/images/video.png")} style={{
              height: 32,
              width: 44
            }}/>
          </View>
          <View style={{
            height: 34,
            backgroundColor: '#9DA5B5',
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{
              color: '#FFF',
              fontFamily: 'poppins-black'
            }}>
              Add response
            </Text>
          </View>
        </View>
        <View style={{
          flex: 4
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
      </View>
    )
  }
}