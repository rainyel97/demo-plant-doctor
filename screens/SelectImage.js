import { View, Text, StyleSheet, Button } from "react-native";

function SelectImage({ route, navigation }) {
  const plantId = route.params.plantId;
  return (
    <View style={styles.container}>
      <Text>Select {plantId} Image</Text>
      <Text>Select {plantId} Image</Text>
      <Text>Select {plantId} Image</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SelectImage;
