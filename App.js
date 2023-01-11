import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList , DrawerItem} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";

function CustomDrawerContent(props){
  const {navigation} = props
  return(
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}

const FirstStack = () => {
  return (
    <Stack.Navigator
     initialRouteName="First Page"
     screenOptions={{headerShown:false}}
     >
      <Stack.Screen name="FirstPage" component={FirstPage}/>
    </Stack.Navigator>
  )
}

const SecondStack = () => {
  return (
    <Stack.Navigator
     initialRouteName="Second Page"
     screenOptions={{headerShown:false}}
     >
      <Stack.Screen name="SecondPage" component={SecondPage}/>
      <Stack.Screen name="ThirdPage" component={ThirdPage}/>
    </Stack.Navigator>
  )
}


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{drawerStyle:{width: 240},headerStyle:{backgroundColor:"#8b0000"},headerTintColor:'#ffff',headerTitleStyle:{fontWeight:'bold'}}} useLegacyImplementation drawerContent={(props)=> <CustomDrawerContent {...props}/>}>
        <Drawer.Screen name="FirstPage" component={FirstStack} options={{drawerLabel:'First Page Option',title:"First Stack"}}/>
        <Drawer.Screen name="SecondPage" component={SecondStack} options={{drawerLabel:'Second Page Option',title:"Second Stack"}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

