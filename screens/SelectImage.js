import { useState } from "react";
import { Pressable, View, Text, StyleSheet, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

function SelectImage({ route, navigation }) {
  const [image, setImage] = useState(null);
  //const plantId = route.params.plantId;
  function getResult() {
    navigation.navigate("Result");
  }
  const [cameraPermissionInformation, requestPermission] =
    ImagePicker.useCameraPermissions();

  async function verifyPermissions() {
    if (
      cameraPermissionInformation.status ===
      ImagePicker.PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (
      cameraPermissionInformation.status === ImagePicker.PermissionStatus.DENIED
    ) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permissions to use this app."
      );
      return false;
    }

    return true;
  }
  async function takePhoto() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }

  async function pickImage() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        {image ? (
          <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />
        ) : (
          <Text>이미지를 등록하세요</Text>
        )}
      </View>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={takePhoto}
      >
        <View>
          <Text style={styles.buttonText}>사진 찍기</Text>
        </View>
      </Pressable>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={pickImage}
      >
        <View>
          <Text style={styles.buttonText}>갤러리</Text>
        </View>
      </Pressable>
      {image ? (
        <Pressable
          style={({ pressed }) => [
            styles.buttonSearch,
            pressed && styles.pressed,
          ]}
          onPress={getResult}
        >
          <View>
            <Text style={styles.buttonText}>검사하기!</Text>
          </View>
        </Pressable>
      ) : null}
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
    width: 300,
    height: 300,
    margin: 30,
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 150,
    height: 50,
    marginBottom: 20,
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
  buttonSearch: {
    width: 150,
    height: 50,
    marginBottom: 15,
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "green",
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
