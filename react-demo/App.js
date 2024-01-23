import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Switch } from "react-native";
import React, { useState } from "react";
import Header from "./components/Header.js";

export default function App() {
  const [bgColor, setBgColor] = useState("red");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleColor = () => setBgColor((previousState) => !previousState);
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Header />
      <Text>HELLOOOOO</Text>
      <Button
        title="click"
        onPress={() => {
          toggleColor("red");
        }}
      ></Button>

      <Switch
        trackColor={{ false: "black", true: "white" }}
        thumbColor={isEnabled ? "white" : "red"}
        onValueChange={() => {
          toggleColor();
        }}
        value={isEnabled}
      ></Switch>
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
