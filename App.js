import { View, Text, Button, StyleSheet, SafeAreaView, Image} from "react-native";
import React from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, HeaderButton, Item } from "react-navigation-header-buttons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductScreen from "./screens/ProductScreen";
import DetailScreen from "./screens/DetailScreen";


const IoniconsHeaderButton = (props) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton
    IconComponent={Ionicons}
    iconSize={30}
    color="white"
    {...props}
  />
);

function HomeScreen({ navigation }) {
  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="person-add"
            iconName="person-add"
            color="white"
          />
        </HeaderButtons>
      )
    });
  }, [navigation]);
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
    <SafeAreaView style={{flex:1}}>
      <Image
        source={require('./assets/react_logo.png')}
        style={styles.sideMenuProfileIcon}/>
    <DrawerContentScrollView {...props}>
        <DrawerItemList {...props}/>
        <DrawerItem 
        label ="Close Drawer" onPress={()=> navigation.closeDrawer()}
        />
        
    </DrawerContentScrollView>
    </SafeAreaView>
  )
}

const Stack = createNativeStackNavigator();

function ProductStack(){
  return(
    <Stack.Navigator screenOptions={{headerTitleStyle:{fontWeight:'bold'},headerStyle:{backgroundColor:"#71FC88"},headerTintColor:'#000000'}}>
      <Stack.Screen name="Product" component={ProductScreen}/>
      <Stack.Screen name="Detail" component={DetailScreen}/>
    </Stack.Navigator>
  )
}

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{drawerStyle:{width: 240},headerTitleStyle:{fontWeight:'bold'},headerStyle:{backgroundColor:"#8b0000"},headerTintColor:'#ffff'}} useLegacyImplementation drawerContent={(props)=> <CustomDrawerContent {...props}/>}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Product" component={ProductStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  }
})

export default App;