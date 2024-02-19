import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Colors from "../constants/Colors";
import { CommonActions } from "@react-navigation/native";
import ColorSelector from "../components/ColorSelector";

const colorList = [
    "blue",
    "green",
    "orange",
    "purple",
    "red",
    "yellow",
    "lightGray",
    "teal",
    "pink",
    "olive"
];

const EditCategory = ({ navigation, route }) => {
  const [title, setTitle] = useState(route.params.title || "");
  const [color, setColor] = useState(route.params.color || Colors.purple);
  const [isValid, setIsValid] = useState(true);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.heading}>Category Name</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => {
            setTitle(text);
            setIsValid(true);
          }}
          value={title}
          placeholder="Enter Category Name"
          autoFocus={true}
          maxLength={30}
        />
      </View>
      <View>
        <Text style={styles.heading}>Choose Color</Text>
        <ColorSelector
          selectedColor={color}
          onSelect={(color) => {
            setColor(color);
            navigation.dispatch(CommonActions.setParams({ color }));
          }}
          colorOptions={colorList}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          if (title.length > 1) {
            route.params.saveChanges({ title, color });
            navigation.dispatch(CommonActions.goBack());
          } else {
            setIsValid(false);
          }
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "white",
            backgroundColor: Colors.blue,
            padding: 10,
            textAlign: "center",
            borderRadius: 5,
            margin: 5,
          }}
        >
          Save
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 5,
  },
  heading: {
    fontSize: 18,
    padding: 5,
    color: "black",
    fontWeight: "bold",
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    margin: 5,
    flex: 1,
  },
});
