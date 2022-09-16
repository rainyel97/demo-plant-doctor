import { View, StyleSheet, ImageBackground, Image, Text } from "react-native";

function Home() {
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
      <View style={styles.items}></View>
      <View style={styles.Footer}>
        <View style={styles.leftBtn}>
          <Text style={styles.text}>정보 광장</Text>
        </View>
        <View style={styles.rightBtn}>
          <Text style={styles.text}>종료하기</Text>
        </View>
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
    backgroundColor: "black",
    opacity: 0.5,
  },
  Footer: {
    flex: 1,
    flexDirection: "row",
  },
  leftBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#8DF389",
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
