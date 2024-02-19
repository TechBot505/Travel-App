import { View, Text } from 'react-native'
import { useEffect, useState } from 'react'
import { SIZES } from '../constants/theme';
import 'expo-dev-client';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import GoogleButton from '../components/GoogleButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {  
  GoogleSignin.configure({
    webClientId: '103457008097-qdu9v80l3ri2khpdkafh4sct879qm0vt.apps.googleusercontent.com',
  });

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    if(user) {
      googleLoginSuccess();
    } else {
      console.log("NO USER!")
    }
  }, [])

  const googleLoginSuccess = () => {
    AsyncStorage.setItem(
        "userData",
        JSON.stringify({
          user: user,
          loggedIn: true
        })
      );
    navigation.navigate('Dashboard');
  }

  const onGoogleButtonPress = async () => {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true});
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const user_signin =  auth().signInWithCredential(googleCredential);
      user_signin.then((user) => {
        console.log('User signed in: ', user);
        setUser(user);
        googleLoginSuccess();
      }).catch((error) => {
        console.log('Error signing in', error);
      });
  }

  if(initializing) return null;

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{fontWeight: 'bold', fontSize: SIZES.h1}}>Welcome to WanderLust</Text>
      <Text style={{textAlign: 'center', padding: 20, fontSize: SIZES.body4}}>Please sign in to continue</Text>
      <GoogleButton onGoogleButtonPress={onGoogleButtonPress} />
    </View>
  )
}

export default LoginScreen;