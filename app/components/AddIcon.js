import { TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";

const AddIcon = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.icon} onPress={onPress}>
      <FontAwesome6 name="plus" size={20} color="black" />
    </TouchableOpacity>
  );
};

export default AddIcon;

const styles = StyleSheet.create({
  icon: {
    padding: 5,
    marginRight: 10,
  },
});
