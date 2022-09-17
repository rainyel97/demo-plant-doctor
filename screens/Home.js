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

function Home() {
  function leftBtnListener() {
    console.log("left pressed");
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
      <View style={styles.Header}>
        <Image
          style={styles.Images}
          source={require("../assets/logo.png")}
          resizeMode="cover"
        />
      </View>
      <View style={styles.items}>
        <Text
          style={{
            paddingTop: 10,
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
          }}
        >
          작물을 선택하세요
        </Text>
        <Item image={Pepper}>고추</Item>
        <Item image={Cabbage}>배추</Item>
        <Item image={Tomato}>토마토</Item>
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
          <Text style={styles.text}>종료하기</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Header: {
    flex: 2,
    backgroundColor: "white",
    alignItems: "center",
  },
  Images: {
    width: "50%",
    height: "100%",
  },
  items: {
    flex: 7,
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
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Home;
