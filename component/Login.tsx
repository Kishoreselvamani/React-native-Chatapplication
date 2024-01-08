import React, {useState} from 'react';
import {View, Text, Button, TextInput, NativeModules} from 'react-native';
import { NativeModule } from 'react-native';

interface Item {
  name: string;
  pass: string;
}

function Login({navigation}) {
  const [name, SetName] = useState<string>('');
  const [pass, SetPass] = useState<string>('');


  
 

  return (
    <View>
      <TextInput
        placeholder="User Name"
        value={name}
        onChangeText={text => SetName(text)}
        selectTextOnFocus={true}
      />
      <TextInput
        placeholder="Password"
        value={pass}
        onChangeText={text => SetPass(text)}
        secureTextEntry
      />
      <Button
        title=" LogIn"
        onPress={() => navigation.navigate('Displayuser')}
      />
    </View>
  );
  }

export default Login;





