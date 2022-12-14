import { View, Text,StyleSheet,SafeAreaView } from 'react-native'
import React from 'react'

const SecondPage = ({route}) => {
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
      <Text style={styles.heading}>Thai-Nichi Institute of Technology</Text>
        <Text style={styles.textStyle}>values passed from First page: {route.params.name}</Text>
    </View>
    <View style={{justifyContent:'flex-end'}}>
    <Text style={{color:'gray', textAlign:'center'}}>www.tni.ac.th</Text>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    },
    heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10, 
    },
    textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
    },
    });

export default SecondPage