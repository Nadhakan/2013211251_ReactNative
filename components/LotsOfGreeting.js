import { View, Text } from 'react-native'
import React from 'react'

const Greeting = (name) =>{
    // const {name} = props
    return(
        <View style={{alignItems:'center'}}>
            {/* <Text>Hello: {props.name}</Text> */}
            <Text style={{color:'cyan',fontSize:32}}>Hello: {name}</Text>
        </View>
    )
}

const LotsOfGreeting = () => {
  return (
    <View style={{flex:1,alignItems:'center',top:50}}>
      <Greeting name="Marry Christmas"/>
      <Greeting name="Marry New Year"/>
      <Greeting name="Songkarn Festival"/>
    </View>
  )
}

export default LotsOfGreeting