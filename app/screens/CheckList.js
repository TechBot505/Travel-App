import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState, useLayoutEffect } from "react";
import AddIcon from "../components/AddIcon";
import ChecklistItem from "../components/ChecklistItem";

const CheckList = ({ navigation }) => {
  const [items, setItems] = useState([{ text: "Hellooo", isChecked: false }]);

  const addItem = (item) => {
    items.push(item);
    setItems([...items]);
  };

  const toggleItem = (index) => {
    const item = items[index];
    item.isChecked = !item.isChecked;
    setItems([...items]);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AddIcon
          onPress={() => addItem({ text: "Akanksha", isChecked: false })}
        />
      ),
    });
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item: { text, isChecked }, index }) => {
          return (
            <ChecklistItem
              text={text}
              isCheck={isChecked}
              onChecked={() => toggleItem(index)}
              key={index}
            />
          );
        }}
      />
    </View>
  );
};

export default CheckList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  icon: {
    padding: 5,
    fontSize: 32,
    color: "white",
  },
});
