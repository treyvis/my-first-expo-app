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
import StudiesSubmit from '../views/StudiesSubmit.js';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <StudiesSubmit
        studies={[{
          title: 'Managing tax clientele efficiently',
          questions: 6,
          expires: 'Nov 5, 2017',
          cost: 125
        },{
          title: 'Managing tax clientele efficiently',
          questions: 6,
          expires: 'Nov 5, 2017',
          cost: 125
        },{
          title: 'Managing tax clientele efficiently',
          questions: 6,
          expires: 'Nov 5, 2017',
          cost: 125
        },{
          title: 'Managing tax clientele efficiently',
          questions: 6,
          expires: 'Nov 5, 2017',
          cost: 125
        }]}
      >
      </StudiesSubmit>
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
