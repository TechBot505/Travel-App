import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect, useState, useLayoutEffect } from "react";
import auth from "@react-native-firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { home, personal, shared } from "../constants/images";
import Block from "../components/Blocks";
import AddIcon from "../components/AddIcon";
import Colors from "../constants/Colors";
import { FontAwesome } from '@expo/vector-icons';

const Dashboard = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const userData = await AsyncStorage.getItem("userData");
    if (userData) {
      let udata = JSON.parse(userData);
      setUserDetails(udata.user);
    }
  };

  const logout = () => {
    auth()
      .signOut()
      .then(() => console.log("User signed out!"));
    navigation.navigate("Login");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AddIcon icon="power-off" color="white" onPress={() => logout()} />
      ),
    });
  });

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <View style={{marginLeft: 15}}>
      <FontAwesome name="plane" size={32} color="white" />
      </View>
      <Text style={styles.text}>Welcome {userDetails?.displayName}!</Text>
      </View>
      <Image source={home} style={{ width: "100%", height: 250 }} />
      <Block
        title="Personal Lists"
        img={personal}
        buttonName="Explore"
        icon="list-check"
        onPress={() => navigation.navigate("PersonalList")}
      />
      <Block
        title="Shared Lists"
        img={shared}
        icon ="table-list"
        buttonName="Create a List"
        onPress={() => navigation.navigate("SharedList")}
      />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.white,
    padding: 20,
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: -5,
    backgroundColor: Colors.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  }
});

// userDetails.user.email
// userDetails.user.displayName
// userDetails.loggedIn
