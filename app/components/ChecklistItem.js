import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const ChecklistItem = ({ text, isCheck, onChecked }) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <TouchableOpacity onPress={onChecked}>
          <MaterialCommunityIcons
            name={isCheck ? "checkbox-marked" : "checkbox-blank"}
            size={24}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.itemText}>{text}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="trash" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChecklistItem;

const styles = StyleSheet.create({
  itemText: { 
    fontSize: 18, 
    padding: 5, 
    color: "white"
  },
  container: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: 10,
  },
  outerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    height: 60,
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    backgroundColor: "blue",
  },
});
