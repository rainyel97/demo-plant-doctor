import { Pressable, View, Text, StyleSheet } from "react-native";

function SelectImage({ route, navigation }) {
  const plantId = route.params.plantId;
  function buttonHandler() {
    navigation.navigate("Result");
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Text>이미지를 등록하세요</Text>
      </View>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={buttonHandler}
      >
        <View>
          <Text style={styles.buttonText}>이미지 추가하기</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  imageBox: {
    marginBottom: 50,
    width: 300,
    height: 300,
    margin: 25,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 150,
    height: 40,
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "black",
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
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SelectImage;
