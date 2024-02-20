import { View, StyleSheet, FlatList } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import Colors from "../constants/Colors";
import CategoryButton from "../components/CategoryButton";
import AddIcon from "../components/AddIcon";

const PersonalList = ({ navigation }) => {
  const [categories, setCategories] = useState([
    { title: "Documents", color: Colors.blueGray },
    { title: "Jwellery", color: Colors.pink},
    { title: "Clothes", color: Colors.teal },
  ]);

  const addCategory = (item) => {
    categories.push(item);
    setCategories([...categories]);
  };

  const removeCategory = (index) => {
    categories.splice(index, 1);
    setCategories([...categories]);
  };

  const updateCategory = (index, item) => {
    categories[index] = item;
    setCategories([...categories]);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AddIcon
          icon="plus"
          color="white"
          onPress={() =>
            navigation.navigate("EditCategory", { saveChanges: addCategory })
          }
        />
      ),
    });
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item: { title, color }, index }) => {
          return (
            <CategoryButton
              title={title}
              color={color}
              onPress={() => navigation.navigate("CheckList", { title, color })}
              key={index}
              onDelete={() => removeCategory(index)}
              onOptions={() =>
                navigation.navigate("EditCategory", {
                  title,
                  color,
                  saveChanges: (item) => updateCategory(index, item),
                })
              }
            />
          );
        }}
      />
    </View>
  );
};

export default PersonalList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
