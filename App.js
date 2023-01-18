import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList , DrawerItem} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./components/HomeScreen";
import SettingScreen from "./components/SettingScreen";

function Mytabs(){
  return(
    <Tab.Navigator screenOptions={({route})=>({
      tabBarIcon:({focused,color,size})=>{
        let iconsName;
        if(route.name === 'Home'){
          iconsName = focused
          ?'ios-information-circle'
          :'ios-information-circle-outline'
        }else if(route.name === 'Setting'){
          iconsName = focused
          ?'ios-list'
          :'ios-list'
        }
        //you can return any component that here!
        return <Ionicons name={iconsName} size={size} color={color}/>
      },
      tabBarActiveTintColor:'black',
      tabBarInactiveTintColor:'green',

    })}>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Setting" component={SettingScreen}/>
    </Tab.Navigator>
  )
}

// function HomeScreen({navigation}){
//   return(
//     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//       <Text>Home!</Text>
//       <Button title='Go to Setting' onPress={()=> navigation.navigate("Setting")}/>
//     </View>
//   )
// }

// function SettingScreen({navigation}){
//   return(
//     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//       <Text>Setting!</Text>
//       <Button title='Go to Home' onPress={()=> navigation.navigate("Home")}/>
//     </View>
//   )
// }

const Tab = createBottomTabNavigator();

// function Mytabs(){
//   return(
//     <Tab.Navigator screenOptions={({route})=>({
//       tabBarIcon:({focused,color,size})=>{
//         let iconsName;
//         if(route.name === 'Home'){
//           iconsName = focused
//           ?'ios-information-circle'
//           :'ios-information-circle-outline'
//         }else if(route.name === 'Setting'){
//           iconsName = focused
//           ?'ios-list'
//           :'ios-list'
//         }
//         //you can return any component that here!
//         return <Ionicons name={iconsName} size={size} color={color}/>
//       },
//       tabBarActiveTintColor:'black',
//       tabBarInactiveTintColor:'green',

//     })}>
//       <Tab.Screen name="Home" component={HomeScreen}/>
//       <Tab.Screen name="Setting" component={SettingScreen}/>
//     </Tab.Navigator>
//   )
// }

function CustomDrawerContent(props){
  const {navigation} = props
  return(
    <DrawerContentScrollView {...props}>
        <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <Mytabs/>
    // </NavigationContainer>

    <NavigationContainer>
      <Drawer.Navigator screenOptions={{drawerStyle:{width: 240},headerTitleStyle:{fontWeight:'bold'}}} useLegacyImplementation drawerContent={(props)=> <CustomDrawerContent {...props}/>}>
        <Drawer.Screen name="Home" component={Mytabs} />
        <Drawer.Screen name="Setting" component={SettingScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

