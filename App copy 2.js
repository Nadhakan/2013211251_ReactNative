import { View, Text, Button} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Homescreens from './screens/homescreens'
import Aboutscreens from './screens/Aboutscreens'
import HomePost from './screens/HomePost'
import CreatePost from './screens/CreatePost'
import FirstPage from './screens/FirstPage'
import SecondPage from './screens/SecondPage'
import FPage from './pages/FPage'
import SPage from './pages/SPage'
import TPage from './pages/TPage'


function HomeSceen({navigation}){
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>HomeSceen</Text>
            <Button title='เกี่ยวกับเรา' onPress={()=> navigation.navigate('about')}/>
        </View>
    )
}

// function AboutSceen(){
//     return(
//         <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
//             <Text>AboutSceen</Text>
//         </View>
//     )
// }

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerStyle:{backgroundColor:'#8b0000'},headerTintColor:'#ffff',headerTitleStyle:{fontWeight:'bold'}}}>
            <Stack.Screen name="Home" component={Homescreens}/>
            {/* <Stack.Screen name="About" component={Aboutscreens}/> */}
            {/* <Stack.Screen name="HomePost" component={HomePost}/> */}
            {/* <Stack.Screen name="CreatePost" component={CreatePost}/> */}
            {/* <Stack.Screen name="First Page" component={FirstPage}/> */}
            {/* <Stack.Screen name="Second Page" component={SecondPage}/> */}
            {/* <Stack.Screen name="FPage" component={FPage}/> */}
            {/* <Stack.Screen name="SPage" component={SPage}/> */}
            {/* <Stack.Screen name="TPage" component={TPage}/> */}
        </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
