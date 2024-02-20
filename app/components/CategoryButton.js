import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const CategoryButton = ({title, color, onPress, onDelete, onOptions}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.itemContainer, {backgroundColor: color}]}>
      <View>
        <Text style={styles.itemTitle}>{title}</Text>
      </View>
      <View style={{ flexDirection: "row", gap: 5 }}>
        <TouchableOpacity onPress={onOptions}>
          <Ionicons name="options-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>
          <Ionicons name="trash" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({
  itemTitle: { fontSize: 24, padding: 5, color: Colors.white },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    flex: 1,
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
  },
});
