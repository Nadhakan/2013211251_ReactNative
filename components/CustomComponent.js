import { View, Text } from 'react-native'
import React from 'react'

const Cat = () => {
    return(
    <View>
        <Text>My brain Bruhh</Text>
    </View>
    )
}

const CustomComponent = () => {
  return (
    <View>
      <Text>Welcome</Text>
      <Cat/>
      <Cat/>
      <Cat/>
    </View>
  )
}

export default CustomComponent