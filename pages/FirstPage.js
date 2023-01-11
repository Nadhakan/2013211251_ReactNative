import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native'
import React from 'react'
import styles from '../components/styles'

const FirstPage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <Text style={styles.textTopStyle}>This is the First Page under First Page Option</Text>
            <Button title='Go to Second Page' onPress={()=> navigation.navigate("SecondPage")}/>
            <Button title='Go to Third Page' onPress={()=> navigation.navigate("ThirdPage")}/>
        </View>
        <View style={{justifyContent:'flex-end'}}>
        <Text style={styles.textBottomStyle}>React Native Drawer</Text>
        <Text style={styles.textBottomStyle}>Create by: Nadhakan</Text>
        </View>
    </SafeAreaView>
  )
}

export default FirstPage
