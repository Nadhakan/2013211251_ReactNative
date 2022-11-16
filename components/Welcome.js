import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./styles";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to React Native</Text>
      <Text>with Mobile Application</Text>
    </View>
  );
};

export default Welcome;