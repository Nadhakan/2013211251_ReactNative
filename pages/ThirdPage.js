import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native'
import React from 'react'
import styles from '../components/styles'

const ThirdPage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <Text style={styles.textTopStyle}>This is the Third Page under Second Page Option</Text>
            <Button title='Go to First Page' onPress={()=> navigation.navigate("FirstPage")}/>
            <Button title='Go to Second Page' onPress={()=> navigation.navigate("SecondPage")}/>
        </View>
        <View style={{justifyContent:'flex-end'}}>
        <Text style={styles.textBottomStyle}>React Native Drawer</Text>
        <Text style={styles.textBottomStyle}>Create by: Nadhakan</Text>
        </View>
    </SafeAreaView>
  )
}

export default ThirdPage