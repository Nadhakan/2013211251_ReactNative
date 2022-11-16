import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Information from "./components/Information";
import Welcome from "./components/Welcome";
import Practice1 from "./components/Practice1";
import Txtinput from "./components/Txtinput";
import CustomComponent from "./components/CustomComponent";

const App = () => {
  return (
    <View>
      {/* <Information/> */}
      {/* <Welcome/> */}
      {/* <Practice1/> */}
      {/* <Txtinput/> */}
      <CustomComponent/>
    </View>
  );
};

export default App;
