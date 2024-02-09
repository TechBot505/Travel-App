import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, RegisterScreen } from '../screens'
import BottomTabNavigator from './BottomTabNavigator'

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={BottomTabNavigator} />
    </Stack.Navigator>
  )
}