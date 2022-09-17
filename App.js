import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, SafeAreaView } from "react-native";

import Home from "./screens/Home";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
