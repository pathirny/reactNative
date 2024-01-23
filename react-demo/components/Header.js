import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return <Text style={styles.header}>THis is a header</Text>;
}

const styles = StyleSheet.create({
  header: {
    color: "pink",
    backgroundColor: "orange",
    fontSize: 40,
  },
});
