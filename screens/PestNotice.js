import WebView from "react-native-webview";
function PestNotice() {
  return (
    <WebView
      source={{
        uri: "https://www.nongsaro.go.kr/portal/contentsFileView.do?cntntsNo=240422&fileSeCode=185001&fileSn=1",
      }}
    />
  );
}
export default PestNotice;
