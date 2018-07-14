import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Generator from './components/generator';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Generator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
