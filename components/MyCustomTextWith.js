import { View, Text } from 'react-native'
import React from 'react'

const CustomName = (props) =>{
    const {fname1,lname1,fname2,lname2} = props
    return(
        <View style={{alignItems:'center'}}>
            <Text style={{color:'red',fontSize:32}}>Your First Name is {fname1}! and Last name is {lname1}</Text>
            <Text style={{color:'green',fontSize:32}}>My Best Friend First Name is {fname2}! and Last name is {lname2}</Text>
        </View>
    )
}

export default CustomName