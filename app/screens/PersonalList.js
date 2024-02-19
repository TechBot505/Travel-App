import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React, {useLayoutEffect, useState} from 'react'
import Colors from '../constants/Colors'
import CategoryButton from '../components/CategoryButton'
import AddIcon from '../components/AddIcon';

const PersonalList = ({navigation}) => {
  const [categories, setCategories] = useState([
    { title: 'Documents', color: Colors.purple }, 
    { title: 'Jwellery', color: Colors.olive }, 
    { title: 'Clothes', color: Colors.teal }
  ]);

  const addCategory = (item) => {
    categories.push(item);
    setCategories([...categories]);
  }

  const removeCategory = (index) => {
    categories.splice(index, 1);
    setCategories([...categories]);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <AddIcon onPress={() => addCategory({title: "Title", color: Colors.blue})} />
  })
})

  return (
    <View style={styles.container}>
      <FlatList 
        data={categories} 
        renderItem={({ item: {title, color}, index }) => {
          return (
            <CategoryButton 
              title={title} 
              color={color} 
              navigation={navigation}
              onPress={() => navigation.navigate("CheckList", {title, color})}
              key={index} 
              onDelete={() => removeCategory(index)}
            />
          )
        }}
      />
    </View>
  )
}

export default PersonalList;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#fff",
  },
  itemTitle: { fontSize: 24, padding: 5, color: "white" },
  itemContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      height: 100,
      flex: 1,
      borderRadius: 20,
      marginHorizontal: 20,
      marginVertical: 10,
      padding: 15,
      backgroundColor: Colors.blue,
  },
  icon: {
      padding: 5,
      marginRight: 10,
  },
  centeredView: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 50,
  },
  modalView: {
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
  },
});