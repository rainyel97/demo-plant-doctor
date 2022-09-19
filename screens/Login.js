import { useContext, useState } from "react";
import { View, StyleSheet, Image, Alert } from "react-native";
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
    } catch (error) {
      Alert.alert("로그인에 실패하였습니다!", "등록되지 않은 정보입니다.");
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="로그인 중입니다..." />;
  }
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <AuthContent isLogin onAuthenticate={LoginHandler} />
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
});

export default Login;
