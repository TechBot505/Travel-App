import { View, StyleSheet, FlatList } from "react-native";
import React, { useState, useLayoutEffect } from "react";
import AddIcon from "../components/AddIcon";
import ChecklistItem from "../components/ChecklistItem";
// import ItemModal from "../components/ItemModal";

const CheckList = ({ navigation }) => {
  const [items, setItems] = useState([{ text: "Akanksha", isChecked: false }]);
  // const [openModal, setOpenModal] = useState(false);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (index) => {
    items.splice(index, 1);
    setItems([...items]);
  };

  const updateItem = (index, item) => {
    items[index] = item;
    setItems([...items]);
  };

  // function renderModal() {
  //   return (
  //     <ItemModal
  //       isopenModal={openModal}
  //       onClose={() => setOpenModal(false)}
  //       onSave={() => {
  //         setOpenModal(false);
  //       }}
  //       addItem={addItem}
  //     />
  //   );
  // }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AddIcon
          // onPress={() => setOpenModal(true)}
          onPress={() => addItem({ text: "Travelling", isChecked: false })}
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
              onEdit={() => setOpenModal(true)}
              onDelete={() => removeItem(index)}
              onChecked={() => {
                const item = items[index];
                item.isChecked = !item.isChecked;
                updateItem(index, item);
              }}
              key={index}
              onChangeText={(newText) => {
                const item = items[index];
                item.text = newText;
                updateItem(index, item);
              }}
            />
          );
        }}
      />
      {/* {renderModal()} */}
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
