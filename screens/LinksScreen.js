import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import Questions from '../views/Questions.js';

import { MonoText } from '../components/StyledText';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Questions study={{
        title: 'Managing tax clientele efficiently',
        questions: [
          'How do you manage your active clientele today?',
          'How do you track realization and billable hours?',
          'How do you currenlty track work for you cleints?',
          'How do you communicate billable hours to your client?'
        ]
      }}/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingLeft: 28,
    paddingRight: 28
  },
  header: {
    fontFamily: 'poppins-black',
    fontSize: 32
  },
  studyContainer: {
    backgroundColor: '#fff',
    borderWidth: 5,
    borderRadius: 5,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  studyHeader: {
    fontSize: 28,
    fontFamily: 'poppins-black'
  }
});
