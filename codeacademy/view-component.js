import React from "react";
import { View, Text} from "react-native";

const App = () =>
   <View style={{alignItems:'center'}}>
    <View style={{width:100,height:100,backgroundColor:'red', justifyContent:'center', alignItems:'center'}}>
      <Text>Welcome to my world!</Text>
    </View>
    <View style={{width:100,height:100,backgroundColor:'blue', justifyContent:'center', alignItems:'center'}}>
      <Text>This is the second block.</Text>
    </View>
  </View>


export default App;
