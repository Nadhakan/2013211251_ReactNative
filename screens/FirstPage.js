import { View, Text, StyleSheet, Button, TextInput, SafeAreaView } from 'react-native'
import React, {useState} from 'react'

const FirstPage = ({navigation}) => {
    const[Nameuser,setNameuser] = useState('')
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
        <Text style={styles.heading}>Thai-Nichi Institute of Technology</Text>
        <Text style={styles.textStyle}>Please insert your name to pass it to second screen</Text>
        <TextInput placeholder='Your Name' style={{width:'80%',padding:10,marginBottom:10,backgroundColor:'lightgray'}}value={Nameuser} onChangeText={setNameuser}/>
      <Button title='Go Next' onPress={()=>navigation.navigate("Second Page",{name:Nameuser})} />
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
    }
    });

export default FirstPage