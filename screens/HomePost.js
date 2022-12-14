import { View, Text, Button } from 'react-native'
import React from 'react'

const HomePost = ({navigation, route}) => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Button title='Create Post' onPress={()=>navigation.navigate("CreatePost")}/>
      <Text style={{margin:10}}>Post : {route.params?.post}</Text>
    </View>
  )
}

export default HomePost