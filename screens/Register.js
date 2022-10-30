import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/LoadingOverlay";
import { AuthContext } from "../store/auth-context";
import { createUser } from "../util/Auth";
function Register() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);
  const navigation = useNavigation();
  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
      //authCtx.authenticate(token);
      Alert.alert("회원가입에 성공하였습니다!", "", [
        {
          Text: "로그인하러가기",
          onPress: () => {
            navigation.navigate("Login");
          },
        },
      ]);
    } catch (error) {
      Alert.alert(
        "가입에 실패하였습니다!",
        "이미 가입된 이메일이거나 이메일이 유효하지 않습니다."
      );
      setIsAuthenticating(false);
    }
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
