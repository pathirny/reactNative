import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React, { useState } from "react";
import Header from "./components/Header.js";

export default function App() {
  const [bgColor, setBgColor] = useState("red");
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Header />
      <Text>HELLOOOOO</Text>
      <Button
        title="Click me"
        onPress={() => {
          setBgColor("blue");
        }}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
