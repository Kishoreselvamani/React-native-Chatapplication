import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Login from './component/Login';
import Displayuser from './component/Displayuser';

const App = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name="Displayuser" component={Displayuser} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App



