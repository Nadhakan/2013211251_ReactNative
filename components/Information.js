import { StyleSheet, Text, View } from "react-native";
import React from "react";

const information = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Thai-nichi</Text>
      <Text style={styles.text}>By....Nadhakan Howteeragul</Text>
      <Text style={styles.text}>Student ID: 2013211251</Text>
      <Text style={styles.text}>Major : Multimedia Technology</Text>
    </View>
  );
};

export default information;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c10d31",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white", fontSize:32
  },
});
