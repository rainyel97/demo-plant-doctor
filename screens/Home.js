import { useContext } from "react";
import { AuthContext } from "../store/auth-context";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
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
  function GoogleMapPressHandler() {
    navigation.navigate("SearchDrug");
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
          <HomeBtn
            icon={iconDrug}
            onPress={GoogleMapPressHandler}
            color="#FFEB3B"
          >
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
    marginVertical: 60,
    width: 160,
    height: 130,
  },
  btnContainer: {
    marginVertical: 17,
    flexDirection: "row",
  },
});

export default Home;
