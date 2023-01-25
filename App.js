import { View, Text, Button} from "react-native";
import React from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import ProductScreen from "./screens/ProductScreen";
import DetailScreen from "./screens/DetailScreen";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Ionicons name="gift" size={45} color="#008b8b" />
      <Text>Home Sceen</Text>
      <Button
        title="Go to About"
      />
    </View>
  );
}

function Product(){
  return (
    <View>
      <ProductScreen/>
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
        
    </DrawerContentScrollView>
  )
}

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{drawerStyle:{width: 240},headerTitleStyle:{fontWeight:'bold'}}} useLegacyImplementation drawerContent={(props)=> <CustomDrawerContent {...props}/>}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Product" component={Product} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;