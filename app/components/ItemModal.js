import {
  View,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const transparent = "rgba(0, 0, 0, 0.3)";

const ItemModal = ({ onClose, isopenModal, onSave, addItem }) => {
  const [item, setItem] = useState("");

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isopenModal}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <View style={{flex:1, marginBottom: 'auto'}}>
              <Text style={styles.heading}>Item Name</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => {
                  setItem(text);
                }}
                value={item}
                placeholder="Enter Item Name"
                autoFocus={true}
                maxLength={30}
              />
            </View>
            <TouchableOpacity onPress={() => {
                addItem({ text: item, isChecked: false });
                setItem("");
                onSave();
            }}>
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
        </View>
      </View>
    </Modal>
  );
};

export default ItemModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: transparent,
  },
  modal: {
    backgroundColor: "white",
    padding: 20,
    width: "100%",
    height: "50%",
    marginTop: "auto",
    borderRadius: 10,
  },
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
    textAlign: "center",
  },
  textInput: {
    height: 45,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
});
