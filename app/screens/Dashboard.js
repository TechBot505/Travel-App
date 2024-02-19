import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { sketch, hum } from "../constants/images";
import Block from "../components/Blocks";

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

  return (
    <View>
      <View
        style={{
          width: "100%",
          alignItems: "flex-end",
          paddingHorizontal: 20,
          paddingTop: 10,
        }}
      >
        <TouchableOpacity onPress={() => logout()}>
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 12,
              borderRadius: 10,
              marginTop: 30,
              backgroundColor: "#8f6ce0",
            }}
          >
            <Image source={hum} style={{ height: 15, width: 20 }} />
          </View>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          paddingHorizontal: 20,
          fontSize: 35,
          paddingTop: 60,
          fontWeight: "bold",
          color: "black",
        }}
      >
        Welcome {userDetails?.displayName}
      </Text>

      <Block
        title="Personal Lists"
        img={sketch}
        buttonName="Explore"
        onPress={() => navigation.navigate("PersonalList")}
      />
      <Block
        title="Shared Lists"
        img={sketch}
        buttonName="Create a List"
        onPress={() => navigation.navigate("SharedList")}
      />
    </View>
  );
};

export default Dashboard;

// userDetails.user.email
// userDetails.user.displayName
// userDetails.loggedIn