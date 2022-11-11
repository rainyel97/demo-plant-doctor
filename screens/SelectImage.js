import { useState, useContext } from "react";
import { Pressable, View, Text, StyleSheet, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { AuthContext } from "../store/auth-context";
import axios from "axios";
import LoadingOverlay from "../components/LoadingOverlay";
function SelectImage({ route, navigation }) {
  let plantName;
  const [isExamining, setIsExamining] = useState(false);
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
  async function getResult() {
    setIsExamining(true);
    let pest;
    let acc;
    let arr = [];
    const localUri = image.uri;
    const filename = localUri.split("/").pop();
    const match = /\.(\w+)$/.exec(filename ?? "");
    const type = match ? `image/${match[1]}` : `image`;
    const formData = new FormData();
    formData.append("image", {
      uri: localUri,
      name: filename,
      type,
    });
    await axios({
      method: "post",
      url: `http://3.38.14.197:3001/api/users/${userEmail}/post/${plantName}`,
      headers: {
        "content-type": "multipart/form-data",
      },
      data: formData,
    })
      .catch((err) => {
        Alert.alert("서버와의 통신에 실패하였습니다.", err);
      })
      .then((res) => {
        console.log(res.data);
        arr = res.data.split(" ");
        acc = arr[2];
        pest = arr[1];
      });

    //console.log(localUri);
    //console.log(filename);
    //console.log(type);
    if (pest === "검사불가") {
      setIsExamining(false);
      Alert.alert(
        "올바르지 않은 이미지 입니다.",
        "이미지를 다시 확인해주세요."
      );
    } else if (pest === "정상") {
      setIsExamining(false);
      Alert.alert(
        "해당 이미지 검사결과 정상으로 판별되었습니다.",
        "아무 병충해가 발견되지 않았습니다."
      );
    } else {
      setIsExamining(false);
      navigation.navigate("Result", {
        image: {
          uri: `http://3.38.14.197:3001/api/images/${arr[0]}`,
        },
        acc: acc,
        pest: pest,
      });
    }
  }
  const [cameraPermissionInformation, requestPermission] =
    ImagePicker.useCameraPermissions();

  async function verifyPermissions() {
    if (
      cameraPermissionInformation.status ===
        ImagePicker.PermissionStatus.UNDETERMINED ||
      cameraPermissionInformation.status === ImagePicker.PermissionStatus.DENIED
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
      console.log(cameraPermissionInformation);
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

    //console.log(result);

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

    //console.log(result);

    if (!result.cancelled) {
      setImage(result);
    }
  }
  if (isExamining) {
    return <LoadingOverlay message="이미지를 검사중입니다..." />;
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
