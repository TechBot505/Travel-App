import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, Dashboard, PersonalList, SharedList, CheckList } from '../screens'

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{
      headerStyle: {
        backgroundColor: '#87dffa',
      },
    }}>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{
        }} />
        <Stack.Screen name="PersonalList" component={PersonalList} />
        <Stack.Screen 
          name="CheckList" 
          component={CheckList} 
          options={({route})=>{
            return {
              title: route.params.title,
              headerStyle: {backgroundColor: route.params.color},
              headerTintColor: "white"
            }
          }} 
        />
        <Stack.Screen name="SharedList" component={SharedList} />
    </Stack.Navigator>
  )
}

export default AuthNavigator;