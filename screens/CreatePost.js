import { TextInput, Button } from 'react-native'
import React, {useState} from 'react'

const CreatePost = ({navigation}) => {

    const[postText,setPostText] = useState('')

    return (
    <>
    <TextInput multiline placeholder='Please text here!!!' style={{height:200,padding:10,backgroundColor:'white'}} value={postText} onChangeText={setPostText}/>
    <Button title='Done' onPress={()=> 
        {navigation.navigate("HomePost",{post:postText})}}/>
    </>
  )
}

export default CreatePost