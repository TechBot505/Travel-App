import { View, Text, Button } from 'react-native'
import { useEffect, useState } from 'react'
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dashboard = ({ navigation}) => {
  const [userDetails, setUserDetails] = useState()

  useEffect(() => {
    getUserData();
  }, [])

  const getUserData = async () => {
    const userData = await AsyncStorage.getItem("userData");
    if(userData) {
      setUserDetails(JSON.parse(userData));
    }
  }

  const logout = () => {
    auth().signOut().then(() => console.log('User signed out!'));
    navigation.navigate('Login');
  }

  return (
    <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
      <Text>Hello {userDetails ? userDetails.email.displayName : "Buddy"}</Text>
      <Button title="Logout" onPress={() => logout()} />
    </View>
  )
}

export default Dashboard;

// userDetails.email.email
// userDetails.email.displayName
// userDetails.loggedIn