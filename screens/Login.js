import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  Button,
  Platform,
} from "react-native";

function Login({ navigation }) {
  function pressHandler() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <View style={styles.loginContainer}>
        <Button onPress={pressHandler} title="개발중입니다..." />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Register");
        }}
        style={{
          backgroundColor: "green",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 25,
          width: 150,
          height: 40,
          borderRadius: 10,
          ...Platform.select({
            ios: {
              shadowOpacity: 0.5,
            },
            android: {
              elevation: 5,
            },
          }),
        }}
        activeOpacity={0.6}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
          }}
        >
          회원가입
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 25,
          width: 150,
          height: 40,
          borderRadius: 10,
          ...Platform.select({
            ios: {
              shadowOpacity: 0.5,
            },
            android: {
              elevation: 5,
            },
          }),
        }}
        activeOpacity={0.6}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
          }}
        >
          종료하기
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E7E9",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logo: {
    marginVertical: 40,
    width: 150,
    height: 120,
    ...Platform.select({
      ios: {
        shadowOpacity: 0.5,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  loginContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    height: 250,
    backgroundColor: "white",
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowOpacity: 0.5,
      },
      android: {
        elevation: 3,
      },
    }),
  },
});

export default Login;
