import { View, Text, StyleSheet, SafeAreaView, TextInput, Button } from 'react-native'
import React,{useState} from 'react'

const Textinput1 = () => {

    const[userName,setUsername] = useState('')

  return (
    <SafeAreaView style= {{flex:1}}>
        <View style={styles.container}>
            <Text>Insert any text in below input</Text>
            <TextInput placeholder='Username' style={styles.input} value={userName} onChangeText = {(userName) => {setUsername (userName)}}/>
            <Text style={{color:"blue"}}>{userName}</Text>
        </View>
    </SafeAreaView>
  )
}

export default Textinput1

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 20,
      backgroundColor: '#ffffff',
    },
    input: {
      width: 250,
      height: 44,
      padding: 10,
      marginTop: 20,
      marginBottom: 10,
      backgroundColor: '#e8e8e8'
    },
    }
  );