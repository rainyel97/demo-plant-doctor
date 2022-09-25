import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";
import axios from "axios";
import * as Location from "expo-location";

function SearchDrug() {
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [data, setData] = useState([]);
  //권한요청
  useEffect(() => {
    (async () => {
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
      const res = await axios
        .get(
          `https://dapi.kakao.com/v2/local/search/keyword.json?query=대학교"&y=${y}&x=${x}&radius=20000`,
          {
            headers: {
              Authorization: "KakaoAK 5bbb60811fafca11368092edfdbc6a89",
            },
          }
        )
        .catch((error) => console.log(error));

      console.log(res.data.documents);
      setData((cur) => [...cur, res.data.documents]);
      //console.log(data);
    })();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {data.map((data) => (
        <View key={data.id}>
          <Text>{data.place_name}</Text>
          <Text>{data.address_name}</Text>
          <Text>{data.distance}</Text>
          <Text>{data.place_url}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SearchDrug;
//5bbb60811fafca11368092edfdbc6a89 카카오 로컬 API키
