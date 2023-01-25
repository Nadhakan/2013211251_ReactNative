import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import axios from 'axios'



const App = () => {
  const getData = async() => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
      alert(JSON.stringify(response.data));
    }
      catch (error) {
        alert(error.message);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={{fontSize:25,textAlign:'center'}}>Example of Axios</Text>
      <Button style={styles.buttonStyle} title='Get Data Using Async Await GET' onPress={getData}/>
    </View>
  )
}

const styles =
StyleSheet.create({

container: {
justifyContent: 'center',
flex: 1,
padding: 16,
},

buttonStyle: {
alignItems: 'center',
backgroundColor: '#DDDDDD',
padding: 10,
width: '100%',
marginTop: 16,
},

});

export default App

