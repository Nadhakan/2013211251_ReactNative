import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList , DrawerItem} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

function Feed(props){
  const {navigation} = props
  return (
    <View style={{flext:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Feed Screen</Text>
      <Button title="Open Drawer" onPress={()=> navigation.openDrawer()}/>
      <Button title="Toggle Drawer" onPress={()=> navigation.toggleDrawer()}/>
    </View>
  )
}

function Article(){
  return (
    <View style={{flext:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Article Screen</Text>
    </View>
  )
}

function CustomDrawerContent(props){
  const {navigation} = props
  return(
    <DrawerContentScrollView {...props}>
        <DrawerItemList {...props}/>
        <DrawerItem 
        label ="Close Drawer" onPress={()=> navigation.closeDrawer()}
        />
        <DrawerItem 
        label ="Toggle Drawer" onPress={()=> navigation.toggleDrawer()}
        />
    </DrawerContentScrollView>
  )
}

function MyDrawer(){
  return( 
    <Drawer.Navigator screenOptions={{drawerStyle:{backgroundColor:"#8b0000" ,width: 240}}} useLegacyImplementation drawerContent={(props)=> <CustomDrawerContent {...props}/>}>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article}/>
    </Drawer.Navigator>
  )
}

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  );
};

export default App;
