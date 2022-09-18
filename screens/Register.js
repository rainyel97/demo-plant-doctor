import { useContext, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/LoadingOverlay";
import { AuthContext } from "../store/auth-context";
import { createUser } from "../util/Auth";
function Register() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert("가입에 실패하였습니다!", "이메일이 유효한지 확인해주세요.");
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="계정을 생성 중입니다..." />;
  }

  return (
    <View style={styles.containrer}>
      <AuthContent onAuthenticate={signupHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  containrer: {
    flex: 1,
    backgroundColor: "#E5E7E9",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default Register;
