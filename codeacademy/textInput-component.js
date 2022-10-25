import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const App = () => {
  const [name, setName] = useState('');

  return (
    <View style={{
      flex: 1,
      alignContent: 'center', 
      justifyContent: 'center', 
      padding: 16,
    }}>
      <Text style={{ marginVertical: 16 }}>
        {name ? `Hi ${name}!` : 'What is your name?'}
      </Text>
      <TextInput
        style={{ padding: 8, backgroundColor: '#f5f5f5' }}
        onChangeText={text => setName((name) => text)}
        secureTextEntry={true} //to make hidden the text
        maxLength={10} //to limit the number of characters
      />
    </View>
  );
};

export default App;
