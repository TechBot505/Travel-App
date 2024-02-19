import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const ChecklistItem = ({
  text,
  isCheck,
  onChecked,
  onChangeText,
  onDelete,
  // onEdit
}) => {
  const [editing, setEditing] = useState(false);
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
        <TouchableOpacity onPress={() => !isCheck && setEditing(true)}>
          {editing ? (
            <TextInput
              autoFocus={true}
              value={text}
              onChangeText={onChangeText}
              placeholder="Enter item"
              onSubmitEditing={() => {}}
              maxLength={30}
              style={styles.itemText}
              onBlur={() => setEditing(false)}
            />
          ) : (
            <Text
              style={[
                styles.itemText,
                {
                  color: isCheck ? "black" : "white",
                  textDecorationLine: isCheck ? "line-through" : "none",
                },
              ]}
            >
              {text}
            </Text>
          )}
          {/* <Text
            style={[
              styles.itemText,
              {
                color: isCheck ? "black" : "white",
                textDecorationLine: isCheck ? "line-through" : "none",
              },
            ]}
          >
            {text}
          </Text> */}
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={onDelete}>
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
    backgroundColor: "#3498db",
  },
});
