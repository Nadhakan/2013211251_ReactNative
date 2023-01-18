import { View, Text, Image, Button } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from "react-navigation-header-buttons";
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

const HomeScreen = ({ navigation }) => {
    React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="person-add"
            iconName="person-add"
            color="black"
          />
        </HeaderButtons>
      )
    });
  }, [navigation]);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={require("../assets/input_username.png")}
        style={{
          padding: 10,
          margin: 5,
          height: 25,
          width: 25,
          resizeMode: "stretch",
          alignItems: "center",
        }}
      />
      <Text>Home Screen</Text>
      <Button
        title="Go to Setting"
        onPress={() => navigation.navigate("Setting")}
      />
    </View>
  );
};

export default HomeScreen;
