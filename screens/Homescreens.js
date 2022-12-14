import { View, Text, Button } from 'react-native'
import React from 'react'
import { AntDesign, Ionicons } from '@expo/vector-icons';

const Homescreens = ({navigation}) => {
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Ionicons name='gift' size={45} color='#008b8b'/>
            <Text>HomeSceen</Text>
            <Button title='เกี่ยวกับเรา' onPress={()=> navigation.navigate("About",{email:'reactnative@tni.ac.th'})}/>
        </View>
    )
}

export default Homescreens