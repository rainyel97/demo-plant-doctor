import { useContext, useState } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/LoadingOverlay";
import { AuthContext } from "../store/auth-context";
import { login } from "../util/Auth";
function Login() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function LoginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
      authCtx.memoryUser(email);
    } catch (error) {
      Alert.alert(
        "로그인에 실패하였습니다!",
        "등록되지 않은 정보이거나 비밀번호가 일치하지 않습니다."
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="로그인 중입니다..." />;
  }
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/newLogo-removebg.png")}
        style={styles.newLogo}
      />
      <AuthContent isLogin onAuthenticate={LoginHandler} />
      <Text style={{ fontSize: 8, marginTop: 4 }}>
        All Icons in this APP from Flaticon.com
      </Text>
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
    marginVertical: 50,
    width: 150,
    height: 120,
  },
  newLogo: {
    width: 260,
    height: 260,
  },
});

export default Login;
