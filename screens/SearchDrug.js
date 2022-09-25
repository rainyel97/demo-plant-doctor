import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import axios from "axios";
import * as Location from "expo-location";

function SearchDrug() {
  let i = 0;
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    getLocation();
    getListKakao();
  }, []);
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
        `https://dapi.kakao.com/v2/local/search/keyword.json?query=대학교"&y=${y}&x=${x}&radius=20000`,
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
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.place_name}</Text>
            <Text>{item.phone ? item.phone : "전화번호가 없습니다..."}</Text>
            <Text>{item.place_url}</Text>
            <Text>{item.distance}</Text>
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
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
});

export default SearchDrug;
//5bbb60811fafca11368092edfdbc6a89 카카오 로컬 API키
