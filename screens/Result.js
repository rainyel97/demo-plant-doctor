import { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { AuthContext } from "../store/auth-context";
function Result({ route, navigation }) {
  const authCtx = useContext(AuthContext);
  const userEmail = authCtx.email; // 사용자에 따라 다른 내역 저장을 위함.
  const img = route.params.image;
  const acc = undefined;
  const pest = "고추탄저병";
  function showPestHandler() {
    navigation.navigate("PestSearch", { pest: pest });
  }
  function showPesticideHandler() {
    navigation.navigate("PesticideSearch", { pest: pest });
  }
  function showDrugHandler() {
    navigation.navigate("SearchDrug");
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageBox}>
          <Image source={{ uri: img }} style={{ width: 300, height: 300 }} />
        </View>
        <View style={styles.resultTextContainer}>
          <Text style={styles.resultText}>해당 작물의 검사 결과는...?</Text>
          <Text style={styles.resultText}>
            정확도 <Text style={{ color: "blue", fontSize: 24 }}>{acc}%</Text>의
            확률로{" "}
          </Text>
          <Text style={styles.resultText}>
            <Text style={{ color: "red", fontSize: 24 }}>{pest}</Text>
            (으)로 판별되었습니다!
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
            onPress={showPestHandler}
          >
            <View>
              <Text style={styles.buttonText}>질병 정보</Text>
            </View>
          </Pressable>
          <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
            onPress={showPesticideHandler}
          >
            <View>
              <Text style={styles.buttonText}>농약 정보</Text>
            </View>
          </Pressable>
        </View>
        <Text style={{ fontSize: 18 }}>
          버튼을 클릭하시면 상세정보 확인이 가능합니다.
        </Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Pressable
          style={({ pressed }) => [styles.DrugBtn, pressed && styles.pressed]}
          onPress={showDrugHandler}
        >
          <View>
            <Text style={styles.buttonText}>가까운 농약사 찾기</Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  imageBox: {
    width: 300,
    height: 300,
    margin: 30,
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  resultTextContainer: {
    marginBottom: 20,
  },
  resultText: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 5,
  },
  button: {
    width: 150,
    height: 50,
    marginBottom: 20,
    marginHorizontal: 6,
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "green",
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    justifyContent: "center",
  },
  DrugBtn: {
    width: 200,
    height: 50,
    marginBottom: 20,
    marginHorizontal: 6,
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "green",
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Result;
