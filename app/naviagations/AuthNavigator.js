import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, Dashboard, PersonalList, SharedList, CheckList, EditCategory } from '../screens'
import Colors from '../constants/Colors';

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
        <Stack.Screen 
          name="EditCategory" 
          component={EditCategory}
          options={({route})=>{
            return {
              title: route.params.title ? `Edit ${route.params.title} List` : 'Create New List',
              headerStyle: {backgroundColor: route.params.color || Colors.purple},
              headerTintColor: "white"
            }
          }}
        />
        <Stack.Screen name="SharedList" component={SharedList} />
    </Stack.Navigator>
  )
}

export default AuthNavigator;