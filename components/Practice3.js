import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";

const Practice3 = () => {
  const checkTextInput = () => {
    //Check for the Name TextInput
    console.log(!name.trim())
    if (!name.trim()) {
      alert("Please Enter Name");
      return;
      //Check for the Email TextInput
    } else if (!email.trim()) {
      alert("Please Enter Email");
      return;
      //Checked Successfully
    } else alert("Success");
    return;
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          placeholder="Enter Name"
          style={styles.textInputStyle}
          value={name}
          onChangeText={(name) => {
            setName(name);
          }}
        />
        <TextInput
          placeholder="Enter Email"
          style={{ marginBottom: 15, ...styles.textInputStyle }}
          value={email}
          onChangeText={(email) => {
            setEmail(email);
          }}
        />
        <Button title="Submit" color="grey" onPress={checkTextInput}/>
      </View>
    </SafeAreaView>
  );
};

export default Practice3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  textInputStyle: {
    width: "100%",
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
  },
});
