import { View, Text, Image, StyleSheet } from "react-native";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../store/auth-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

//네비게이션을 이용해 작물별로 구현, 목록은 item 컴포넌트 활용
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

function BeanHis() {
  return <Text>bean</Text>;
}

function RadishHis() {
  return <Text>radish</Text>;
}

function History() {
  //const [result, setResult] = useState([]); //결과내역 저장할 객체 배열

  // useEffect(() => {
  //   getHistory();
  // }, []);

  // function getHistory() {
  //   결과내역 받아오는 함수(처음 결과내역을 불러올때 실행되고 그 이후로는 삭제될때 실행됨)
  //   setResult
  // }
  const authCtx = useContext(AuthContext);
  const userEmail = authCtx.email; // 사용자에따라 다른 데이터 로드를 위함.
  return (
    <Tab.Navigator
      initialRouteName="All"
      screenOptions={{
        tabBarStyle: { height: 70 },
        tabBarLabelStyle: { color: "black", fontSize: 17 },
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
              style={{ transform: [{ scale: 0.06 }] }}
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
              style={{ transform: [{ scale: 0.07 }] }}
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
              style={{ transform: [{ scale: 0.07 }] }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bean"
        component={BeanHis}
        options={{
          headerShown: false,
          title: "콩",
          tabBarIcon: () => (
            <Image
              source={require("../assets/icon_bean.png")}
              resizeMode="contain"
              style={{ transform: [{ scale: 0.07 }] }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Radish"
        component={RadishHis}
        options={{
          headerShown: false,
          title: "무",
          tabBarIcon: () => (
            <Image
              source={require("../assets/icon_radish.png")}
              resizeMode="contain"
              style={{ transform: [{ scale: 0.07 }] }}
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
              style={{ transform: [{ scale: 0.07 }] }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});

export default History;
