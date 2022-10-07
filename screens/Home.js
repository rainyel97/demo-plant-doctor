import { useContext } from "react";
import { AuthContext } from "../store/auth-context";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
} from "react-native";
import HomeBtn from "../components/HomeBtn";
//
import iconSearch from "../assets/search.png";
import iconDrug from "../assets/drug.png";
import iconHistory from "../assets/history.png";
import iconLogout from "../assets/logout.png";
//
function Home({ navigation }) {
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

  return (
    <ImageBackground
      source={require("../assets/Homebg.jpg")}
      resizeMode="cover"
      style={styles.back}
    >
      <View style={styles.container}>
        <Image source={require("../assets/homelogo.png")} style={styles.logo} />
        <View style={styles.btnContainer}>
          <HomeBtn
            icon={iconSearch}
            onPress={SelectPlantPressHandler}
            color="#8DF389"
          >
            병충해 검사하기
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
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
            onPress={PestNoticeHandler}
          >
            <View style={styles.textContainer}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                월간 병충해 발생 정보
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
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logo: {
    marginVertical: 45,
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
});

export default Home;
