import { View, Text } from 'react-native'
import React from 'react'

const User = () => {

    const users = [
        {id:1,name:"Bruh"},
        {id:2,name:"Meme"}
    ]

  return (
    <View>
      {
        users.map((user,index)=>{
            return <Text key={user.id}>{index+1}.{user.name}</Text>
        })
      }
    </View>
  )
}

export default User