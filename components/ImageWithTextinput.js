import { StyleSheet, Text, View, SafeAreaView, Image, TextInput } from 'react-native'
import React from 'react'

const ImageWithTextinput = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
            <View style={styles.SectionStyle}>
                <Image source={require('../assets/input_username.png')}
                style ={styles.ImageStyle}/>
                <TextInput style={{flex:1}} placeholder='Enter your Username here'/>
            </View>
            <View style={styles.SectionStyle}>
                <Image source={require('../assets/input_phone.png')}
                style ={styles.ImageStyle}/>
                <TextInput style={{flex:1}} placeholder='Enter your mobile number here'/>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default ImageWithTextinput

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        margin:10
    },
    SectionStyle:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 10,
    },
    ImageStyle:{
        padding: 10,
        margin:5,
        height:25,
        width:25,
        resizeMode:'stretch',
        alignItems:'center'
    }
})