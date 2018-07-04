import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';

import Calculator from './MyCom/Calculator';
import CalMid from './MyCom/CalMid';

export default class App extends Component{
  render() {
    return (
      <View>
        <Text style={styles.title}>Dheeno Super Calculator</Text>
        {/*<Calculator />*/}
        <CalMid />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  label: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 24,
    margin: 5,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 5,
    textAlign: "center"
  },
  input: {
    color: 'red',
    fontSize: 24,
    margin: 5,
    textAlign: 'right',
  },
  result: {
    color: 'green',
    fontSize: 24,
    fontWeight: 'bold',
    margin: 5,
    textAlign: 'right',
  }
});
