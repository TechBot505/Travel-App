import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Let's Get Started!</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
        <View style={styles.buttonContainer}>
          <AntDesign name="google" size={32} color="white" />
          <Text style={styles.text}>Sign In with Google</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20
  },
  button: {
    padding: 10,
    backgroundColor: "#1688fa",
    borderRadius: 32,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingHorizontal: 10
  },
  text: {
    color: "#fff",
    fontSize: 16
  }
})