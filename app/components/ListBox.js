import React from 'react'
import {Text,TouchableOpacity, View,Image} from 'react-native'

const ListBox = ({img, title, bg, onPress}) => {
    return (
            <TouchableOpacity
                onPress={onPress}
                style={{
                    flexDirection:"row",
                    backgroundColor:bg,
                    padding:20,
                    marginHorizontal:20,
                    borderRadius:20,
                    alignItems:"center",
                    marginTop:10
                }}
            >
                    <Image
                        source={img}
                        style={{width:40,height:40}}
                    />

                    <View>
                         <Text style={{
                             color:"#345c74",
                             fontWeight:"bold",
                             fontSize:13,
                             paddingHorizontal:20,
                             width:170
                         }}>{title}</Text>
                         <Text style={{
                             color:"#f58084",
                             fontFamily:"Medium",
                             fontSize:12,
                             paddingHorizontal:20
                         }}>
                             10 hours, 19 lessons
                         </Text>
                    </View>
                    <Text style={{
                        color:"#345c74",
                        fontFamily:"Medium",
                        fontSize:13,
                        paddingLeft:10,
                        paddingRight:10
                    }}>
                        25%
                    </Text>
            </TouchableOpacity>
        )
                }

export default ListBox;