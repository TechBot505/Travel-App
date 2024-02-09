import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

export default function RegisterScreen({navigation}) {
  return (
    <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
      <Text>RegisterScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text>Go to Login</Text>
      </TouchableOpacity>
    </View>
  )
}