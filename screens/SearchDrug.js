import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import * as Location from "expo-location";
import { Linking } from "react-native";
function SearchDrug() {
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    getLocation();
    console.log(x, y);
    getListKakao();
  }, [x, y]);
  async function getLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "현재위치를 찾을 수 없습니다.",
        "위치 권한 요청이 거부되었습니다."
      );
      return;
    }

    const { coords } = await Location.getCurrentPositionAsync();
    setX(coords.longitude);
    setY(coords.latitude);
  }
  async function getListKakao() {
    try {
      const res = await axios.get(
        `https://dapi.kakao.com/v2/local/search/keyword.json?page=1&size=15&sort=distance&query="농약사"&radius=20000&y=${y}&x=${x}`,
        {
          headers: {
            Authorization: "KakaoAK 5bbb60811fafca11368092edfdbc6a89",
          },
        }
      );
      setData(res.data.documents);
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, padding: 10 }}>
        당신의 위치에서 20Km이내에서 찾은 15개의 결과입니다...
      </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View>
              <Text>{item.place_name}</Text>
              <Text>{item.phone ? item.phone : "전화번호가 없습니다..."}</Text>
              <Text>{item.address_name}</Text>
            </View>
            <TouchableOpacity
              onPress={() => Linking.openURL(item.place_url)}
              style={{ backgroundColor: "lightgreen", borderRadius: 8 }}
            >
              <Text style={{ fontSize: 20, padding: 5 }}>상세정보보기</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "white",
    padding: 20,
    fontSize: 15,
    margin: 5,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default SearchDrug;
//5bbb60811fafca11368092edfdbc6a89 카카오 로컬 API키
