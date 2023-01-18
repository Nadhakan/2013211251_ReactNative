import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from './HomeScreen'

const SettingScreen = ({navigation}) => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>Setting Screen</Text>
        <Button title='Go to Home' onPress={()=> navigation.navigate("Home")}/>
      </View>
  )
}

export default SettingScreen