import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useEffect, useContext } from "react";
import { AuthContext } from "../store/auth-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import exampleImg from "../assets/pepper.jpg";
const Tab = createBottomTabNavigator();

function getResult(userEmail) {
  //서버로부터 데이터 받아오는 코드(유저이메일을 변수로받아야함)
}
function removeResult(toRemoveIdx) {
  //서버로 삭제할 내역을 보냄(삭제할 내역의 인덱스를 변수로받아야함)
}
//내역이 저장될 객체 배열
const result = [
  {
    image: exampleImg,
    pest: "고추탄저병",
    acc: 99,
    idx: 1,
    createdTime: "2022/10/15 21:11",
  },
  {
    image: exampleImg,
    pest: "고추흰가루병",
    acc: 98,
    idx: 2,
    createdTime: "2022/10/16 21:11",
  },
  {
    image: exampleImg,
    pest: "배추노균병",
    acc: 97,
    idx: 3,
    createdTime: "2022/10/17 21:11",
  },
  {
    image: exampleImg,
    pest: "파녹병",
    acc: 96,
    idx: 4,
    createdTime: "2022/10/18 21:11",
  },
  {
    image: exampleImg,
    pest: "콩불마름병",
    acc: 95,
    idx: 5,
    createdTime: "2022/10/19 21:11",
  },
  {
    image: exampleImg,
    pest: "무노균병",
    acc: 94,
    idx: 6,
    createdTime: "2022/10/20 21:11",
  },
];
//네비게이션을 이용해 작물별로 구현
function AllHis({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={result}
        renderItem={({ item }) => (
          <View style={{ alignItems: "center", borderWidth: 2 }}>
            <TouchableOpacity
              key={item.idx}
              onPress={() =>
                navigation.navigate("Result", {
                  pest: item.pest,
                  acc: item.acc,
                  image: item.image,
                })
              }
              style={{ padding: 10, height: 200, alignItems: "center" }}
            >
              <Image
                source={item.image}
                style={{ marginHorizontal: 10, width: 150, height: 150 }}
              />
              <Text style={{ padding: 2, fontSize: 13, fontWeight: "bold" }}>
                {item.createdTime}
              </Text>
              <Text style={{ padding: 2, fontSize: 13, fontWeight: "bold" }}>
                {item.pest}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                margin: 5,
                padding: 7,
                width: 100,
                alignItems: "center",
                borderRadius: 16,
                backgroundColor: "red",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                삭제
              </Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.idx}
        numColumns={2}
      />
    </View>
  );
}

function PepperHis({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={result.filter((item) => item.pest.includes("고추"))}
        renderItem={({ item }) => (
          <View style={{ alignItems: "center", borderWidth: 2 }}>
            <TouchableOpacity
              key={item.idx}
              onPress={() =>
                navigation.navigate("Result", {
                  pest: item.pest,
                  acc: item.acc,
                  image: item.image,
                })
              }
              style={{ padding: 10, height: 200, alignItems: "center" }}
            >
              <Image
                source={item.image}
                style={{ marginHorizontal: 10, width: 150, height: 150 }}
              />
              <Text style={{ padding: 2, fontSize: 13, fontWeight: "bold" }}>
                {item.createdTime}
              </Text>
              <Text style={{ padding: 2, fontSize: 13, fontWeight: "bold" }}>
                {item.pest}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                margin: 5,
                padding: 7,
                width: 100,
                alignItems: "center",
                borderRadius: 16,
                backgroundColor: "red",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                삭제
              </Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.idx}
        numColumns={2}
      />
    </View>
  );
}

function CabbageHis({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={result.filter((item) => item.pest.includes("배추"))}
        renderItem={({ item }) => (
          <View style={{ alignItems: "center", borderWidth: 2 }}>
            <TouchableOpacity
              key={item.idx}
              onPress={() =>
                navigation.navigate("Result", {
                  pest: item.pest,
                  acc: item.acc,
                  image: item.image,
                })
              }
              style={{ padding: 10, height: 200, alignItems: "center" }}
            >
              <Image
                source={item.image}
                style={{ marginHorizontal: 10, width: 150, height: 150 }}
              />
              <Text style={{ padding: 2, fontSize: 13, fontWeight: "bold" }}>
                {item.createdTime}
              </Text>
              <Text style={{ padding: 2, fontSize: 13, fontWeight: "bold" }}>
                {item.pest}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                margin: 5,
                padding: 7,
                width: 100,
                alignItems: "center",
                borderRadius: 16,
                backgroundColor: "red",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                삭제
              </Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.idx}
        numColumns={2}
      />
    </View>
  );
}

function WelshHis({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={result.filter((item) => item.pest.includes("파"))}
        renderItem={({ item }) => (
          <View style={{ alignItems: "center", borderWidth: 2 }}>
            <TouchableOpacity
              key={item.idx}
              onPress={() =>
                navigation.navigate("Result", {
                  pest: item.pest,
                  acc: item.acc,
                  image: item.image,
                })
              }
              style={{ padding: 10, height: 200, alignItems: "center" }}
            >
              <Image
                source={item.image}
                style={{ marginHorizontal: 10, width: 150, height: 150 }}
              />
              <Text style={{ padding: 2, fontSize: 13, fontWeight: "bold" }}>
                {item.createdTime}
              </Text>
              <Text style={{ padding: 2, fontSize: 13, fontWeight: "bold" }}>
                {item.pest}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                margin: 5,
                padding: 7,
                width: 100,
                alignItems: "center",
                borderRadius: 16,
                backgroundColor: "red",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                삭제
              </Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.idx}
        numColumns={2}
      />
    </View>
  );
}

function BeanHis({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={result.filter((item) => item.pest.includes("콩"))}
        renderItem={({ item }) => (
          <View style={{ alignItems: "center", borderWidth: 2 }}>
            <TouchableOpacity
              key={item.idx}
              onPress={() =>
                navigation.navigate("Result", {
                  pest: item.pest,
                  acc: item.acc,
                  image: item.image,
                })
              }
              style={{ padding: 10, height: 200, alignItems: "center" }}
            >
              <Image
                source={item.image}
                style={{ marginHorizontal: 10, width: 150, height: 150 }}
              />
              <Text style={{ padding: 2, fontSize: 13, fontWeight: "bold" }}>
                {item.createdTime}
              </Text>
              <Text style={{ padding: 2, fontSize: 13, fontWeight: "bold" }}>
                {item.pest}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                margin: 5,
                padding: 7,
                width: 100,
                alignItems: "center",
                borderRadius: 16,
                backgroundColor: "red",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                삭제
              </Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.idx}
        numColumns={2}
      />
    </View>
  );
}

function RadishHis({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={result.filter((item) => item.pest.includes("무"))}
        renderItem={({ item }) => (
          <View style={{ alignItems: "center", borderWidth: 2 }}>
            <TouchableOpacity
              key={item.idx}
              onPress={() =>
                navigation.navigate("Result", {
                  pest: item.pest,
                  acc: item.acc,
                  image: item.image,
                })
              }
              style={{ padding: 10, height: 200, alignItems: "center" }}
            >
              <Image
                source={item.image}
                style={{ marginHorizontal: 10, width: 150, height: 150 }}
              />
              <Text style={{ padding: 2, fontSize: 13, fontWeight: "bold" }}>
                {item.createdTime}
              </Text>
              <Text style={{ padding: 2, fontSize: 13, fontWeight: "bold" }}>
                {item.pest}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                margin: 5,
                padding: 7,
                width: 100,
                alignItems: "center",
                borderRadius: 16,
                backgroundColor: "red",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                삭제
              </Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.idx}
        numColumns={2}
      />
    </View>
  );
}

function History() {
  const authCtx = useContext(AuthContext);
  const userEmail = authCtx.email; // 사용자에따라 다른 데이터 로드를 위함. 아래 함수들에서 사용
  useEffect(() => {
    //getResult(userEmail);
  }, []); //처음에 화면이 렌더링 될 때 실행되고 그 이후에는 삭제시에만 실행됨

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default History;
