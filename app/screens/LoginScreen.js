import { View, StyleSheet, ImageBackground } from "react-native";
import { useEffect, useState } from "react";
import "expo-dev-client";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import GoogleButton from "../components/GoogleButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login } from "../constants/images";

const LoginScreen = ({ navigation }) => {
  GoogleSignin.configure({
    webClientId:
      "103457008097-qdu9v80l3ri2khpdkafh4sct879qm0vt.apps.googleusercontent.com",
  });

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    if (user) {
      googleLoginSuccess();
    } else {
      console.log("NO USER!");
    }
  }, []);

  const googleLoginSuccess = () => {
    AsyncStorage.setItem(
      "userData",
      JSON.stringify({
        user: user,
        loggedIn: true,
      })
    );
    navigation.navigate("Dashboard");
  };

  const onGoogleButtonPress = async () => {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const user_signin = auth().signInWithCredential(googleCredential);
    user_signin
      .then((user) => {
        console.log("User signed in: ", user);
        setUser(user);
        googleLoginSuccess();
      })
      .catch((error) => {
        console.log("Error signing in", error);
      });
  };

  if (initializing) return null;

  return (
    <View
      style={styles.container}
    >
      <ImageBackground source={login} style={styles.image}>
      <GoogleButton onGoogleButtonPress={onGoogleButtonPress} />
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: -10,
  }
});
