import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../store/auth-context";
function History() {
  const authCtx = useContext(AuthContext);
  const userEmail = authCtx.email; // 사용자에따라 다른 데이터 로드를 위함.
  return <View></View>;
}

const styles = StyleSheet.create({});

export default History;
