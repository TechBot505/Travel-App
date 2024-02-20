import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { FontAwesome6 } from '@expo/vector-icons';

export default function Blocks({ title, buttonName, img, onPress, icon }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textHeading}>{title}</Text>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.text}>{buttonName}</Text>
          <FontAwesome6 name={icon} size={18} color={Colors.white} />
        </TouchableOpacity>
      </View>
      <Image source={img} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.primary,
    marginTop: 15,
    marginHorizontal: 20,
    borderRadius: 20,
    paddingVertical: 20,
    paddingLeft: 30,
  },
  textHeading: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: "bold",
    width: 250,
    paddingRight: 100,
  },
  button: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: Colors.secondary,
    alignItems: "center",
    marginTop: 20,
    width: 150,
    paddingVertical: 10,
    borderRadius: 14,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  text: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: "500"
  },
  image: {
    width: 120,
    height: 100,
    marginLeft: -90,
  },
});
