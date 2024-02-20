import { TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";

const AddIcon = ({ onPress, icon, color }) => {
  return (
    <TouchableOpacity style={styles.icon} onPress={onPress}>
      <FontAwesome6 name={icon} size={20} color={color} />
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
