import { WebView } from "react-native-webview";

function PestSearch({ route }) {
  const pest = route.params.pest;
  console.log(pest);
  console.log(url);
  let url;
  if (pest === "고추탄저병")
    url =
      "https://ncpms.rda.go.kr/mobile/MobileSicknsDtlR.ms?hiKncrCode=VC&sKncrCode=VC011205&dtlKey=D00000195&pageIndex=1";
  else if (pest === "고추흰가루병")
    url =
      "https://ncpms.rda.go.kr/mobile/MobileSicknsDtlR.ms?hiKncrCode=VC&sKncrCode=VC011205&dtlKey=D00000197&pageIndex=1";
  else if (pest === "배추검은썩음병")
    url =
      "https://ncpms.rda.go.kr/mobile/MobileSicknsDtlR.ms?hiKncrCode=VC&sKncrCode=VC011205&dtlKey=D00000706&pageIndex=1";
  else if (pest === "배추노균병")
    url =
      "https://ncpms.rda.go.kr/mobile/MobileSicknsDtlR.ms?hiKncrCode=VC&sKncrCode=VC011205&dtlKey=D00000714&pageIndex=1";
  else if (pest === "파검은무늬병")
    url =
      "https://ncpms.rda.go.kr/mobile/MobileSicknsDtlR.ms?hiKncrCode=VC&sKncrCode=VC011205&dtlKey=D00001566&pageIndex=1";
  else if (pest === "파노균병")
    url =
      "https://ncpms.rda.go.kr/mobile/MobileSicknsDtlR.ms?hiKncrCode=VC&sKncrCode=VC011205&dtlKey=D00001574&pageIndex=1";
  else if (pest === "파녹병")
    url =
      "https://ncpms.rda.go.kr/mobile/MobileSicknsDtlR.ms?hiKncrCode=VC&sKncrCode=VC011205&dtlKey=D00001577&pageIndex=1";
  else if (pest === "콩점무늬병")
    url =
      "https://ncpms.rda.go.kr/mobile/MobileSicknsDtlR.ms?hiKncrCode=VC&sKncrCode=VC011205&dtlKey=D00004151&pageIndex=1";
  else if (pest === "콩불마름병")
    url =
      "https://ncpms.rda.go.kr/mobile/MobileSicknsDtlR.ms?hiKncrCode=VC&sKncrCode=VC011205&dtlKey=D00001489&pageIndex=1";
  else if (pest === "무노균병")
    url =
      "https://ncpms.rda.go.kr/mobile/MobileSicknsDtlR.ms?hiKncrCode=VC&sKncrCode=VC011205&dtlKey=D00000574&pageIndex=1";
  else if (pest === "무검은무늬병")
    url =
      "https://ncpms.rda.go.kr/mobile/MobileSicknsDtlR.ms?hiKncrCode=VC&sKncrCode=VC011205&dtlKey=D00000568&pageIndex=1";

  console.log(pest);
  console.log(url);
  return <WebView source={{ uri: url }} />;
}
//https://psis.rda.go.kr/psis/agc/res/agchmRegistStusLst.ps?menuId=PS00263&sAgCropsYn1=Y&sAgCropsNm1=고추&sAgDbyhsYn1=Y&sAgApplcDbyhsNm1=흰가루병//농약정보대체주소
//ncpms.rda.go.kr/mobile/MobileSicknsDtlR.ms?hiKncrCode=VC&sKncrCode=VC011205&dtlKey=D00000195&pageIndex=1//질병상세페이지//고추탄저병
export default PestSearch;
