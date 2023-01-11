import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native'
import React from 'react'
import styles from '../components/styles'

const FPage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <Text style={styles.textTopStyle}>This is the First Page</Text>
            <Button title='Go to Second Page' onPress={()=> navigation.navigate("SPage")}/>
            <Button title='Go to Third Page' onPress={()=> navigation.navigate("TPage")}/>
        </View>
        <View style={{justifyContent:'flex-end'}}>
        <Text style={styles.textBottomStyle}>Thai-Nichi Institute of Technology</Text>
        </View>
    </SafeAreaView>
  )
}

export default FPage
