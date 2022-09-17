import {
  Pressable,
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

function Item(props) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={props.onPress}
      >
        <View style={styles.innerContainer}>
          <Image source={props.image} style={styles.images} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{props.children}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default Item;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 10,
    elevation: 4,
    opacity: 0.85,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
  },
  images: {
    flex: 1,
    width: "40%",
    height: "100%",
    borderRadius: 10,
  },
});
