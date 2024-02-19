import { View, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors';
import ColorButton from './ColorButton';

const ColorSelector = ({selectedColor, colorOptions, onSelect}) => {
  return (
    <View style={styles.container}>
      {colorOptions.map(colorName => {
        return (
          <ColorButton
            key={colorName}
            color={Colors[colorName]}
            isSelected={colorName === selectedColor}
            onPress={() => onSelect(colorName)}
          />
        )
      })}
    </View>
  )
}

export default ColorSelector;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    }
})