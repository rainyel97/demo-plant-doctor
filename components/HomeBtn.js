import { Pressable, StyleSheet, Text, Image } from "react-native";

function Button({ children, onPress, icon, color }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        { backgroundColor: color },
      ]}
      onPress={onPress}
    >
      <Image style={styles.icon} source={icon} resizeMode="contain" />
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
    margin: 10,
  },
  button: {
    width: 150,
    height: 150,
    marginHorizontal: 15,
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "white",
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: "center",
    color: "black",
    fontSize: 16,
  },
});
