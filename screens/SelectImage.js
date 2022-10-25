import { useState, useContext } from "react";
import { Pressable, View, Text, StyleSheet, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { AuthContext } from "../store/auth-context";
import axios from "axios";
function SelectImage({ route, navigation }) {
  let plantName;
  const [image, setImage] = useState(null);
  const selectedPlant = route.params.plantId;
  if (selectedPlant === "고추") {
    plantName = "pep";
  } else if (selectedPlant === "배추") {
    plantName = "cab";
  } else if (selectedPlant === "콩") {
    plantName = "bean";
  } else if (selectedPlant === "무") {
    plantName = "rad";
  } else {
    plantName = "wel";
  }
  const authCtx = useContext(AuthContext);
  const userEmail = authCtx.email; // 사용자에 따라 다른 내역 저장을 위함.
  //const plantId = route.params.plantId;
  async function getResult() {
    const localUri = image.uri;
    const filename = localUri.split("/").pop();
    const match = /\.(\w+)$/.exec(filename ?? "");
    const type = match ? `image/${match[1]}` : `image`;
    const formData = new FormData();
    formData.append("image", { uri: localUri, name: filename, type });
    await axios({
      method: "post",
      url: `http://3.38.14.197:3001/api/users/${userEmail}/post/${plantName}`,
      headers: {
        "content-type": "multipart/form-data",
      },
      data: formData,
    });
    console.log(localUri);
    console.log(filename);
    console.log(type);
    navigation.navigate("Result", { image: image }); //이때 정확도랑 병명까지 넘겨줘야함
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
        "요청이 거부되었습니다!",
        "기능을 사용하기 위해 카메라 권한이 필요합니다."
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
      setImage(result);
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
      setImage(result);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        {image ? (
          <Image
            source={{ uri: image.uri }}
            style={{ width: 300, height: 300 }}
          />
        ) : (
          <Text>{selectedPlant} 이미지를 등록하세요</Text>
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
