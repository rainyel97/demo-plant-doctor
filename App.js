import { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//components
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";
import SelectPlant from "./screens/SelectPlant";
import SearchDrug from "./screens/SearchDrug";
import History from "./screens/History";
import SelectImage from "./screens/SelectImage";
import Result from "./screens/Result";
import PestSearch from "./screens/PestSearch";
import PesticideSearch from "./screens/PesticideSearch";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
//
const Stack = createNativeStackNavigator();
//회원가입 화면 스택
function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "환영합니다!",
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
  );
}

//인증 후 화면스택
function AuthenticatedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "원하는 기능을 선택하세요",
        }}
      />
      <Stack.Screen
        name="SearchDrug"
        component={SearchDrug}
        options={{
          title: "가까운 농약사 찾기",
        }}
      />
      <Stack.Screen
        name="SelectPlant"
        component={SelectPlant}
        options={{
          title: "작물을 선택하세요",
        }}
      />
      <Stack.Screen
        name="SelectImage"
        component={SelectImage}
        options={{
          title: "이미지를 추가하세요",
        }}
      />
      <Stack.Screen
        name="Result"
        component={Result}
        options={{
          title: "검사결과",
        }}
      />
      <Stack.Screen
        name="PestSearch"
        component={PestSearch}
        options={{
          title: "질병정보",
        }}
      />
      <Stack.Screen
        name="PesticideSearch"
        component={PesticideSearch}
        options={{
          title: "농약정보",
        }}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{
          title: "검사 내역",
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
