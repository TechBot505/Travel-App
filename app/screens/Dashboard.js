import { View, Text, Button } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';

const Dashboard = ({ navigation}) => {

  const logout = () => {
    auth().signOut().then(() => console.log('User signed out!'));
    navigation.navigate('Login');
  }

  return (
    <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
      <Text>Dashboard</Text>
      <Button title="Logout" onPress={() => logout()} />
    </View>
  )
}

export default Dashboard;