import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function Blocks({ title, buttonName, img, onPress}) {
  return (
    <View style={{
        flexDirection:"row",
        backgroundColor:"#87dffa",
        marginTop:15,
        marginHorizontal:20,
        borderRadius:20,
        paddingVertical:20,
        paddingLeft:30
    }}>
        <View>
            <Text style={{
                color:"black",
                fontSize:20,
                fontWeight: "bold",
                width:250,
                paddingRight:100 
            }}>
                {title}
            </Text>
            <TouchableOpacity
                 onPress={onPress}
                 style={{
                     flexDirection:"row",
                     backgroundColor:"#8f6ce0",
                     alignItems:"center",
                     marginTop:20,
                     width:150,
                     paddingVertical:10,
                     borderRadius:14,
                     paddingHorizontal:10,
                     justifyContent:"center"
                 }}
            >
                     <Text style={{
                         color:"#FFF",
                         fontSize:14
                     }}>{buttonName}</Text>  
            </TouchableOpacity>
        </View>
        <Image
             source={img}
             style={{marginLeft:-40,marginTop:30}}
        />

    </View>
  )
}