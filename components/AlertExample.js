import { View, Text, StyleSheet, Button, Alert, SafeAreaView} from 'react-native'
import React from 'react'

const AlertExample = () => {

    const SimpleAlertHandler = () => {
        alert('Hello I am Simple Alert')
    }

    const twoOptionAlertHandler = () => {
        //function to make two option alert
        Alert.alert(
            //title
            'Hello',
            //body
            'I am two option alert. Do you want to cancel me',
            [
                {
                    text:'yes',onPress: () => alert('Yes Pressed')
                },
                {
                    text:'no',onPress: () => alert('No Pressed')
                }
            ],
            //clicking out side of Aert will not cancel
            {cancelabel: false}
        )
    }

  return (
    <SafeAreaView style={{flex: 1}} >
        <View style={style.container}>
            <Button title='Simple Alert' onPress={SimpleAlertHandler}/>
            <Button title='Alert with Two Option' onPress={twoOptionAlertHandler}/>
        </View>
    </SafeAreaView>
  )
}

export default AlertExample

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
})