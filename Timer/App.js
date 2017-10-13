/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  componentWillMount() {
    this.setState({timer: 1});
      setInterval(() => {
        this.setState({timer: this.state.timer + 1});
      }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.instructions}>
        Time since this app was launched:
      </Text>
      <Text style={styles.instructions}>
        {this.state.timer} seconds
      </Text>
      <Text style={styles.instructions}>
        Also, wait, nvm.
      </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
