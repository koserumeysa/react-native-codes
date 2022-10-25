import React from 'react';
import { Image, View } from 'react-native';

const App = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems:'center'}}>
    <Image style={{width:100,height:100}} source={{ uri: 'https://picsum.photos/100/100' }}>
    </Image>
    <Image style={{width:100,height:100}} source={require('./react-native.jpg')}>
    </Image>
  </View>
);

export default App;