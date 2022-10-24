import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../store/auth-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
  Modal,
} from "react-native";
import HomeBtn from "../components/HomeBtn";
//
import iconSearch from "../assets/search.png";
import iconDrug from "../assets/drug.png";
import iconHistory from "../assets/history.png";
import iconLogout from "../assets/logout.png";
//
function Home({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  //AsyncStorage.setItem("memory", "false");
  useEffect(() => {
    AsyncStorage.getItem("memory", (err, result) => {
      if (result === "true") setModalVisible(false);
      else setModalVisible(true);
      console.log(result);
    });
  }, []);
  const authCtx = useContext(AuthContext);
  function SelectPlantPressHandler() {
    navigation.navigate("SelectPlant");
  }
  function HistoryPressHandler() {
    navigation.navigate("History");
  }
  function SearchDrugHandler() {
    navigation.navigate("SearchDrug");
  }
  function PestNoticeHandler() {
    navigation.navigate("PestNotice");
  }

  function memoryClick() {
    setModalVisible(!modalVisible);
    AsyncStorage.setItem("memory", "true");
  }

  return (
    <ImageBackground
      source={require("../assets/Homebg.jpg")}
      resizeMode="cover"
      style={styles.back}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              월간 병해충 발생 정보가 10월로 업데이트 되었습니다!
            </Text>
            <Text style={[styles.modalText, { color: "blue" }]}>
              최신정보를 확인하실 것을 권장합니다.
            </Text>
            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed && styles.pressed,
              ]}
              onPress={memoryClick}
            >
              <Text style={styles.textStyle}>다시 열지 않기</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.container}>
        <Image source={require("../assets/homelogo.png")} style={styles.logo} />
        <View style={styles.btnContainer}>
          <HomeBtn
            icon={iconSearch}
            onPress={SelectPlantPressHandler}
            color="#8DF389"
          >
            병해충 검사하기
          </HomeBtn>
          <HomeBtn icon={iconDrug} onPress={SearchDrugHandler} color="#FFEB3B">
            농약사 찾아보기
          </HomeBtn>
        </View>
        <View style={styles.btnContainer}>
          <HomeBtn
            icon={iconHistory}
            onPress={HistoryPressHandler}
            color="#5DC2EB"
          >
            검사 내역
          </HomeBtn>
          <HomeBtn icon={iconLogout} onPress={authCtx.logout} color="#E53935">
            로그아웃
          </HomeBtn>
        </View>
        <View style={styles.NoticeContainer}>
          <Pressable
            style={({ pressed }) => [pressed && styles.pressed]}
            onPress={PestNoticeHandler}
          >
            <View style={styles.textContainer}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                월간 병해충 발생 정보
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  back: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  logo: {
    marginTop: 100,
    marginBottom: 45,
    width: 160,
    height: 130,
  },
  btnContainer: {
    marginVertical: 17,
    flexDirection: "row",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.7,
  },
  NoticeContainer: {
    margin: 16,
    justifyContent: "center",
    padding: 10,
    height: 50,
    borderRadius: 10,
    elevation: 4,
    opacity: 0.9,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 1,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    backgroundColor: "green",
    borderRadius: 15,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
});

export default Home;
