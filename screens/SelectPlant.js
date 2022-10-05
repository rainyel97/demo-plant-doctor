import { View, StyleSheet, ImageBackground } from "react-native";
// plant photo
import Pepper from "../assets/pepper.jpg";
import Cabbage from "../assets/cabbage.jpg";
import WelshOnion from "../assets/welshonion.jpg";
import Bean from "../assets/bean.jpg";
import Radish from "../assets/radish.jpg";
// components
import Item from "../components/item";

function SelectPlant({ navigation }) {
  function pressHandler(e) {
    navigation.navigate("SelectImage", { plantId: e });
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
          onPress={pressHandler.bind(this, "고추")}
        >
          고추
        </Item>
        <Item
          image={Cabbage}
          plant="cabbage"
          onPress={pressHandler.bind(this, "배추")}
        >
          배추
        </Item>
        <Item image={Bean} plant="bean" onPress={pressHandler.bind(this, "콩")}>
          콩
        </Item>
        <Item
          image={Radish}
          plant="radish"
          onPress={pressHandler.bind(this, "무")}
        >
          무
        </Item>
        <Item
          image={WelshOnion}
          plant="welsh onion"
          onPress={pressHandler.bind(this, "파")}
        >
          파
        </Item>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  items: {
    flex: 1,
    flexDirection: "column",
  },
});

export default SelectPlant;
