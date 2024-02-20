import { TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Colors from "../constants/Colors";

const ColorButton = ({ onPress, isSelected, color }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.colorButton,
        { borderWidth: isSelected ? 3 : 0, backgroundColor: color },
      ]}
    />
  );
};

export default ColorButton;

const styles = StyleSheet.create({
  colorButton: {
    width: 42,
    height: 42,
    borderRadius: 24,
    margin: 10,
    borderColor: Colors.lightGray,
  },
});
