import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/Login";
import Home from "./screens/Home";
import Board from "./screens/Board";
import SelectImage from "./screens/SelectImage";
import Register from "./screens/Register";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: "환영합니다!",
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "작물을 선택하세요!",
            }}
          />
          <Stack.Screen
            name="SelectImage"
            component={SelectImage}
            options={{
              title: "이미지를 추가하세요!",
            }}
          />
          <Stack.Screen
            name="Board"
            component={Board}
            options={{
              title: "정보 광장",
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              title: "회원가입",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
