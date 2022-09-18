import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
// plant photo
import Pepper from "../assets/pepper.jpg";
import Cabbage from "../assets/cabbage.jpg";
import Tomato from "../assets/tomato.jpg";
// components
import Item from "../components/item";

function Home({ navigation }) {
  function pressHandler(e) {
    navigation.navigate("SelectImage", { plantId: e });
  }
  function leftBtnListener() {
    navigation.navigate("Board");
  }
  function rightBtnListener() {
    console.log("right pressed");
  }

  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      resizeMode="cover"
      style={styles.Container}
    >
      <View style={styles.items}>
        <Item
          image={Pepper}
          plant="pepper"
          onPress={pressHandler.bind(this, "pepper")}
        >
          고추
        </Item>
        <Item
          image={Cabbage}
          plant="cabbage"
          onPress={pressHandler.bind(this, "cabbage")}
        >
          배추
        </Item>
        <Item
          image={Tomato}
          plant="tomato"
          onPress={pressHandler.bind(this, "tomato")}
        >
          토마토
        </Item>
      </View>
      <View style={styles.Footer}>
        <TouchableOpacity
          style={styles.leftBtn}
          onPress={leftBtnListener}
          activeOpacity={0.6}
        >
          <Text style={styles.text}>정보 광장</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.rightBtn}
          onPress={rightBtnListener}
          activeOpacity={0.6}
        >
          <Text style={styles.text}>로그아웃</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Images: {
    width: "50%",
    height: "100%",
  },
  items: {
    flex: 9,
    flexDirection: "column",
  },
  Footer: {
    flex: 1,
    flexDirection: "row",
  },
  leftBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "green",
  },
  rightBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "red",
  },
});

export default Home;
