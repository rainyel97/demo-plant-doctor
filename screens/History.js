import { View, Text, Image, StyleSheet } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../store/auth-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function AllHis() {
  return <Text>all</Text>;
}

function PepperHis() {
  return <Text>pepper</Text>;
}

function CabbageHis() {
  return <Text>cabbage</Text>;
}

function WelshHis() {
  return <Text>welshonion</Text>;
}

function History() {
  const authCtx = useContext(AuthContext);
  const userEmail = authCtx.email; // 사용자에따라 다른 데이터 로드를 위함.
  return (
    <Tab.Navigator
      initialRouteName="All"
      screenOptions={{
        tabBarLabelStyle: { color: "black", fontSize: 13 },
        tabBarActiveTinitColor: "black",
        tabBarActiveBackgroundColor: "lightgreen",
      }}
    >
      <Tab.Screen
        name="All"
        component={AllHis}
        options={{
          headerShown: false,
          title: "모두보기",
          tabBarIcon: () => (
            <Image
              source={require("../assets/icon_all.png")}
              resizeMode="cover"
              style={{ transform: [{ scale: 0.05 }] }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Pepper"
        component={PepperHis}
        options={{
          headerShown: false,
          title: "고추",
          tabBarIcon: () => (
            <Image
              source={require("../assets/icon_pepper.png")}
              resizeMode="cover"
              style={{ transform: [{ scale: 0.05 }] }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cabbage"
        component={CabbageHis}
        options={{
          headerShown: false,
          title: "배추",
          tabBarIcon: () => (
            <Image
              source={require("../assets/icon_cabbage.png")}
              resizeMode="cover"
              style={{ transform: [{ scale: 0.05 }] }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Welsh"
        component={WelshHis}
        options={{
          headerShown: false,
          title: "파",
          tabBarIcon: () => (
            <Image
              source={require("../assets/icon_welshonion.png")}
              resizeMode="contain"
              style={{ transform: [{ scale: 0.05 }] }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});

export default History;
