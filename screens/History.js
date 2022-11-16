import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useEffect, useContext, useState, useLayoutEffect } from "react";
import { AuthContext } from "../store/auth-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
const Tab = createBottomTabNavigator();
//네비게이션을 이용해 작물별로 구현

function PepperHis({ navigation }) {
  const authCtx = useContext(AuthContext);
  const userEmail = authCtx.email;
  const [result, setResult] = useState([]);
  useEffect(() => {
    getResult(userEmail);
  }, []);
  async function getResult(userEmail) {
    await axios
      .get(`http://3.38.14.197:3001/api/users/${userEmail}`)
      .catch(() => {
        Alert.alert("서버와의 통신에 실패했습니다.");
      })
      .then((res) => {
        setResult(res.data);

        console.log(result);
        console.log(result.length);
      });
  }

  async function removeResult(toRemoveIdx) {
    //서버로 삭제할 내역을 보냄(삭제할 내역의 인덱스를 변수로받아야함)
    await axios
      .delete(
        `http://3.38.14.197:3001/api/users/${userEmail}/delete/${toRemoveIdx}`
      )
      .catch(() => {
        Alert.alert("서버와의 통신에 실패했습니다.");
      })
      .then(() => {
        Alert.alert("내역이 삭제되었습니다");
      });
    //console.log(toRemoveIdx);
    getResult(userEmail);
  }
  return (
    <View style={styles.container}>
      {result.filter((item) => item.Plant_type === "pep").length === 0 ||
      result === undefined ? (
        <View
          style={{
            marginTop: 200,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>검사내역이 없습니다.</Text>
        </View>
      ) : null}
      <FlatList
        data={result.filter((item) => item.Plant_type === "pep")}
        renderItem={({ item }) => (
          <View
            style={{
              justifyContent: "space-between",
              height: 250,
              width: "47.5%",
              margin: 5,
              alignItems: "center",
              borderRadius: 8,
              backgroundColor: "white",
            }}
          >
            <TouchableOpacity
              key={item.Search_idx}
              onPress={() =>
                navigation.navigate("Result", {
                  pest: item.Pest,
                  acc: item.Percentage,
                  image: {
                    uri: `http://3.38.14.197:3001/api/images/${item.Plant_img}`,
                  },
                })
              }
              style={{ padding: 10, height: 200, alignItems: "center" }}
            >
              <Image
                source={{
                  uri: `http://3.38.14.197:3001/api/images/${item.Plant_img}`,
                }}
                style={{
                  marginHorizontal: 10,
                  width: 150,
                  height: 150,
                  borderRadius: 8,
                }}
              />
              <Text style={{ padding: 2, fontSize: 13, fontWeight: "bold" }}>
                {item.Created_time}
              </Text>
              <Text style={{ padding: 2, fontSize: 13, fontWeight: "bold" }}>
                {item.Pest}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                margin: 5,
                padding: 7,
                width: 80,
                alignItems: "center",
                borderRadius: 8,
                backgroundColor: "red",
              }}
              onPress={() => {
                Alert.alert("정말 삭제하시겠습니까?", "", [
                  {
                    text: "예",
                    onPress: removeResult.bind(this, item.Search_idx),
                  },
                  { text: "아니오", style: "cancel" },
                ]);
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 16,
                  color: "white",
                }}
              >
                삭제
              </Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.Search_idx}
        numColumns={2}
      />
    </View>
  );
}

function CabbageHis({ navigation }) {
  const authCtx = useContext(AuthContext);
  const userEmail = authCtx.email;
  const [result, setResult] = useState([]);
  useEffect(() => {
    getResult(userEmail);
  }, []);
  async function getResult(userEmail) {
    await axios
      .get(`http://3.38.14.197:3001/api/users/${userEmail}`)
      .catch(() => {
        Alert.alert("서버와의 통신에 실패했습니다.");
      })
      .then((res) => {
        setResult(res.data);
      });
    console.log(result);
    console.log(result.length);
  }

  async function removeResult(toRemoveIdx) {
    //서버로 삭제할 내역을 보냄(삭제할 내역의 인덱스를 변수로받아야함)
    await axios
      .delete(
        `http://3.38.14.197:3001/api/users/${userEmail}/delete/${toRemoveIdx}`
      )
      .catch(() => {
        Alert.alert("서버와의 통신에 실패했습니다.");
      })
      .then(() => {
        Alert.alert("내역이 삭제되었습니다");
      });
    //console.log(toRemoveIdx);
    getResult(userEmail);
  }
  return (
    <View style={styles.container}>
      {result.filter((item) => item.Plant_type === "cab").length === 0 ||
      result === undefined ? (
        <View
          style={{
            marginTop: 200,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>검사내역이 없습니다.</Text>
        </View>
      ) : null}
      <FlatList
        data={result.filter((item) => item.Plant_type === "cab")}
        renderItem={({ item }) => (
          <View
            style={{
              justifyContent: "space-between",
              height: 250,
              width: "47.5%",
              margin: 5,
              alignItems: "center",
              borderRadius: 8,
              backgroundColor: "white",
            }}
          >
            <TouchableOpacity
              key={item.Search_idx}
              onPress={() =>
                navigation.navigate("Result", {
                  pest: item.Pest,
                  acc: item.Percentage,
                  image: {
                    uri: `http://3.38.14.197:3001/api/images/${item.Plant_img}`,
                  },
                })
              }
              style={{ padding: 10, height: 200, alignItems: "center" }}
            >
              <Image
                source={{
                  uri: `http://3.38.14.197:3001/api/images/${item.Plant_img}`,
                }}
                style={{
                  marginHorizontal: 10,
                  width: 150,
                  height: 150,
                  borderRadius: 8,
                }}
              />
              <Text style={{ padding: 2, fontSize: 13, fontWeight: "bold" }}>
                {item.Created_time}
              </Text>
              <Text style={{ padding: 2, fontSize: 13, fontWeight: "bold" }}>
                {item.Pest}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                margin: 5,
                padding: 7,
                width: 80,
                alignItems: "center",
                borderRadius: 8,
                backgroundColor: "red",
              }}
              onPress={() => {
                Alert.alert("정말 삭제하시겠습니까?", "", [
                  {
                    text: "예",
                    onPress: removeResult.bind(this, item.Search_idx),
                  },
                  { text: "아니오", style: "cancel" },
                ]);
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 16,
                  color: "white",
                }}
              >
                삭제
              </Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.Search_idx}
        numColumns={2}
      />
    </View>
  );
}

function WelshHis({ navigation }) {
  const authCtx = useContext(AuthContext);
  const userEmail = authCtx.email;
  const [result, setResult] = useState([]);
  useEffect(() => {
    getResult(userEmail);
  }, []);
  async function getResult(userEmail) {
    await axios
      .get(`http://3.38.14.197:3001/api/users/${userEmail}`)
      .catch(() => {
        Alert.alert("서버와의 통신에 실패했습니다.");
      })
      .then((res) => {
        setResult(res.data);
      });
    console.log(result);
    console.log(result.length);
  }

  async function removeResult(toRemoveIdx) {
    //서버로 삭제할 내역을 보냄(삭제할 내역의 인덱스를 변수로받아야함)
    await axios
      .delete(
        `http://3.38.14.197:3001/api/users/${userEmail}/delete/${toRemoveIdx}`
      )
      .catch(() => {
        Alert.alert("서버와의 통신에 실패했습니다.");
      })
      .then(() => {
        Alert.alert("내역이 삭제되었습니다");
      });
    //console.log(toRemoveIdx);
    getResult(userEmail);
  }
  return (
    <View style={styles.container}>
      {result.filter((item) => item.Plant_type === "wel").length === 0 ||
      result === undefined ? (
        <View
          style={{
            marginTop: 200,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>검사내역이 없습니다.</Text>
        </View>
      ) : null}
      <FlatList
        data={result.filter((item) => item.Plant_type === "wel")}
        renderItem={({ item }) => (
          <View
            style={{
              justifyContent: "space-between",
              height: 250,
              width: "47.5%",
              margin: 5,
              alignItems: "center",
              borderRadius: 8,
              backgroundColor: "white",
            }}
          >
            <TouchableOpacity
              key={item.Search_idx}
              onPress={() =>
                navigation.navigate("Result", {
                  pest: item.Pest,
                  acc: item.Percentage,
                  image: {
                    uri: `http://3.38.14.197:3001/api/images/${item.Plant_img}`,
                  },
                })
              }
              style={{ padding: 10, height: 200, alignItems: "center" }}
            >
              <Image
                source={{
                  uri: `http://3.38.14.197:3001/api/images/${item.Plant_img}`,
                }}
                style={{
                  marginHorizontal: 10,
                  width: 150,
                  height: 150,
                  borderRadius: 8,
                }}
              />
              <Text style={{ padding: 2, fontSize: 13, fontWeight: "bold" }}>
                {item.Created_time}
              </Text>
              <Text style={{ padding: 2, fontSize: 13, fontWeight: "bold" }}>
                {item.Pest}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                margin: 5,
                padding: 7,
                width: 80,
                alignItems: "center",
                borderRadius: 8,
                backgroundColor: "red",
              }}
              onPress={() => {
                Alert.alert("정말 삭제하시겠습니까?", "", [
                  {
                    text: "예",
                    onPress: removeResult.bind(this, item.Search_idx),
                  },
                  { text: "아니오", style: "cancel" },
                ]);
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 16,
                  color: "white",
                }}
              >
                삭제
              </Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.Search_idx}
        numColumns={2}
      />
    </View>
  );
}

function BeanHis({ navigation }) {
  const authCtx = useContext(AuthContext);
  const userEmail = authCtx.email;
  const [result, setResult] = useState([]);
  useEffect(() => {
    getResult(userEmail);
  }, []);
  async function getResult(userEmail) {
    await axios
      .get(`http://3.38.14.197:3001/api/users/${userEmail}`)
      .catch(() => {
        Alert.alert("서버와의 통신에 실패했습니다.");
      })
      .then((res) => {
        setResult(res.data);
      });
    console.log(result);
    console.log(result.length);
  }

  async function removeResult(toRemoveIdx) {
    //서버로 삭제할 내역을 보냄(삭제할 내역의 인덱스를 변수로받아야함)
    await axios
      .delete(
        `http://3.38.14.197:3001/api/users/${userEmail}/delete/${toRemoveIdx}`
      )
      .catch(() => {
        Alert.alert("서버와의 통신에 실패했습니다.");
      })
      .then(() => {
        Alert.alert("내역이 삭제되었습니다");
      });
    //console.log(toRemoveIdx);
    getResult(userEmail);
  }
  return (
    <View style={styles.container}>
      {result.filter((item) => item.Plant_type === "bean").length === 0 ||
      result === undefined ? (
        <View
          style={{
            marginTop: 200,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>검사내역이 없습니다.</Text>
        </View>
      ) : null}
      <FlatList
        data={result.filter((item) => item.Plant_type === "bean")}
        renderItem={({ item }) => (
          <View
            style={{
              justifyContent: "space-between",
              height: 250,
              width: "47.5%",
              margin: 5,
              alignItems: "center",
              borderRadius: 8,
              backgroundColor: "white",
            }}
          >
            <TouchableOpacity
              key={item.Search_idx}
              onPress={() =>
                navigation.navigate("Result", {
                  pest: item.Pest,
                  acc: item.Percentage,
                  image: {
                    uri: `http://3.38.14.197:3001/api/images/${item.Plant_img}`,
                  },
                })
              }
              style={{ padding: 10, height: 200, alignItems: "center" }}
            >
              <Image
                source={{
                  uri: `http://3.38.14.197:3001/api/images/${item.Plant_img}`,
                }}
                style={{
                  marginHorizontal: 10,
                  width: 150,
                  height: 150,
                  borderRadius: 8,
                }}
              />
              <Text style={{ padding: 2, fontSize: 13, fontWeight: "bold" }}>
                {item.Created_time}
              </Text>
              <Text style={{ padding: 2, fontSize: 13, fontWeight: "bold" }}>
                {item.Pest}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                margin: 5,
                padding: 7,
                width: 80,
                alignItems: "center",
                borderRadius: 8,
                backgroundColor: "red",
              }}
              onPress={() => {
                Alert.alert("정말 삭제하시겠습니까?", "", [
                  {
                    text: "예",
                    onPress: removeResult.bind(this, item.Search_idx),
                  },
                  { text: "아니오", style: "cancel" },
                ]);
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 16,
                  color: "white",
                }}
              >
                삭제
              </Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.Search_idx}
        numColumns={2}
      />
    </View>
  );
}

function RadishHis({ navigation }) {
  const authCtx = useContext(AuthContext);
  const userEmail = authCtx.email;
  const [result, setResult] = useState([]);
  useEffect(() => {
    getResult(userEmail);
  }, []);
  async function getResult(userEmail) {
    await axios
      .get(`http://3.38.14.197:3001/api/users/${userEmail}`)
      .catch(() => {
        Alert.alert("서버와의 통신에 실패했습니다.");
      })
      .then((res) => {
        setResult(res.data);
      });
    console.log(result);
    console.log(result.length);
  }

  async function removeResult(toRemoveIdx) {
    //서버로 삭제할 내역을 보냄(삭제할 내역의 인덱스를 변수로받아야함)
    await axios
      .delete(
        `http://3.38.14.197:3001/api/users/${userEmail}/delete/${toRemoveIdx}`
      )
      .catch(() => {
        Alert.alert("서버와의 통신에 실패했습니다.");
      })
      .then(() => {
        Alert.alert("내역이 삭제되었습니다");
      });
    //console.log(toRemoveIdx);
    getResult(userEmail);
  }
  return (
    <View style={styles.container}>
      {result.filter((item) => item.Plant_type === "rad").length === 0 ||
      result === undefined ? (
        <View
          style={{
            marginTop: 200,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>검사내역이 없습니다.</Text>
        </View>
      ) : null}
      <FlatList
        data={result.filter((item) => item.Plant_type === "rad")}
        renderItem={({ item }) => (
          <View
            style={{
              justifyContent: "space-between",
              height: 250,
              width: "47.5%",
              margin: 5,
              alignItems: "center",
              borderRadius: 8,
              backgroundColor: "white",
            }}
          >
            <TouchableOpacity
              key={item.Search_idx}
              onPress={() =>
                navigation.navigate("Result", {
                  pest: item.Pest,
                  acc: item.Percentage,
                  image: {
                    uri: `http://3.38.14.197:3001/api/images/${item.Plant_img}`,
                  },
                })
              }
              style={{ padding: 10, height: 200, alignItems: "center" }}
            >
              <Image
                source={{
                  uri: `http://3.38.14.197:3001/api/images/${item.Plant_img}`,
                }}
                style={{
                  marginHorizontal: 10,
                  width: 150,
                  height: 150,
                  borderRadius: 8,
                }}
              />
              <Text style={{ padding: 2, fontSize: 13, fontWeight: "bold" }}>
                {item.Created_time}
              </Text>
              <Text style={{ padding: 2, fontSize: 13, fontWeight: "bold" }}>
                {item.Pest}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                margin: 5,
                padding: 7,
                width: 80,
                alignItems: "center",
                borderRadius: 8,
                backgroundColor: "red",
              }}
              onPress={() => {
                Alert.alert("정말 삭제하시겠습니까?", "", [
                  {
                    text: "예",
                    onPress: removeResult.bind(this, item.Search_idx),
                  },
                  { text: "아니오", style: "cancel" },
                ]);
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 16,
                  color: "white",
                }}
              >
                삭제
              </Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.Search_idx}
        numColumns={2}
      />
    </View>
  );
}

function History({ navigation }) {
  const authCtx = useContext(AuthContext);
  const userEmail = authCtx.email;
  const [result, setResult] = useState([]);
  useEffect(() => {
    getResult(userEmail);
  }, []);
  async function getResult(userEmail) {
    await axios
      .get(`http://3.38.14.197:3001/api/users/${userEmail}`)
      .catch(() => {
        Alert.alert("서버와의 통신에 실패했습니다.");
      })
      .then((res) => {
        setResult(res.data);
      });
    console.log(result);
    console.log(result.length);
  }
  async function deleteAllHandler(userEmail) {
    await axios
      .delete(`http://3.38.14.197:3001/api/users/${userEmail}/deleteAll`)
      .catch(() => {
        Alert.alert("서버와의 통신에 실패했습니다.");
      })
      .then(() => {
        Alert.alert("내역이 전부 삭제되었습니다");
      });
    navigation.navigate("Home");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <AntDesign
            name="delete"
            size={24}
            color="black"
            onPress={() => {
              if (result.length === 0)
                Alert.alert("삭제할 내역이 존재하지 않습니다.");
              else
                Alert.alert(
                  "정말 내역 전체를 삭제하시겠습니까?",
                  "이 기능을 실행하면 되돌릴 수 없습니다.",
                  [
                    {
                      text: "예",
                      onPress: deleteAllHandler.bind(this, userEmail),
                    },
                    { text: "아니오", style: "cancel" },
                  ]
                );
            }}
          />
        );
      },
    });
  }, [navigation, deleteAllHandler]);
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
    backgroundColor: "#BDC3C7",
  },
});

export default History;
