import React from 'react';
import { StyleSheet, View } from 'react-native';

const App = () => (
  <View style={styles.layout}>
    <View style={[styles.box, { backgroundColor: 'red' }]} />
    <View style={[styles.box, { backgroundColor: 'green' }]} />
    <View style={[styles.box, { backgroundColor: 'blue' }]} />
  </View>
);

export default App;

export const styles = StyleSheet.create({
  layout: {
    flexDirection:'row',
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  box: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: 'black',
  },
});