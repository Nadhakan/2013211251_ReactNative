import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'

const Txtinput = () => {
  return (
    <View style={{padding:50}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <TextInput
            placeholder='Course Goal'
            style={{width:'80%',borderColor:'black',borderWidth:1,padding:10}}
        />
        <Button title='add'/>
      </View>
    </View>
  )
}

export default Txtinput