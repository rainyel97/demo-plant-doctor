import { WebView } from "react-native-webview";

function PesticideSearch({ route }) {
  const pest = route.params.pest;
  console.log(pest);
  console.log(url);
  let url;
  if (pest === "고추탄저병")
    url =
      "https://ncpms.rda.go.kr/mobile/UntySrcPstcLstR2.ms?skDiseaseWeedName=탄저병&skCorpName=고추";
  else if (pest === "고추흰가루병")
    url =
      "https://ncpms.rda.go.kr/mobile/UntySrcPstcLstR2.ms?skDiseaseWeedName=흰가루병&skCorpName=고추";
  else if (pest === "배추검은썩음병")
    url =
      "https://ncpms.rda.go.kr/mobile/UntySrcPstcLstR2.ms?skDiseaseWeedName=검은썩음병&skCorpName=배추";
  else if (pest === "배추노균병")
    url =
      "https://ncpms.rda.go.kr/mobile/UntySrcPstcLstR2.ms?skDiseaseWeedName=노균병&skCorpName=고추";
  else if (pest === "파검은무늬병")
    url =
      "https://ncpms.rda.go.kr/mobile/UntySrcPstcLstR2.ms?skDiseaseWeedName=검은무늬병&skCorpName=파";
  else if (pest === "파노균병")
    url =
      "https://ncpms.rda.go.kr/mobile/UntySrcPstcLstR2.ms?skDiseaseWeedName=노균병&skCorpName=파";
  else if (pest === "파녹병")
    url =
      "https://ncpms.rda.go.kr/mobile/UntySrcPstcLstR2.ms?skDiseaseWeedName=녹병&skCorpName=파";
  else if (pest === "콩점무늬병")
    url =
      "https://ncpms.rda.go.kr/mobile/UntySrcPstcLstR2.ms?skDiseaseWeedName=점무늬병&skCorpName=콩";
  else if (pest === "콩불마름병")
    url =
      "https://ncpms.rda.go.kr/mobile/UntySrcPstcLstR2.ms?skDiseaseWeedName=불마름병&skCorpName=콩";
  else if (pest === "무노균병")
    url =
      "https://ncpms.rda.go.kr/mobile/UntySrcPstcLstR2.ms?skDiseaseWeedName=노균병&skCorpName=무";
  else if (pest === "무검은무늬병")
    url =
      "https://ncpms.rda.go.kr/mobile/UntySrcPstcLstR2.ms?skDiseaseWeedName=검은무늬병&skCorpName=무";

  console.log(pest);
  console.log(url);
  return <WebView source={{ uri: url }} />;
}
//https://psis.rda.go.kr/psis/agc/res/agchmRegistStusLst.ps?menuId=PS00263&sAgCropsYn1=Y&sAgCropsNm1=고추&sAgDbyhsYn1=Y&sAgApplcDbyhsNm1=흰가루병//농약정보대체주소
//ncpms.rda.go.kr/mobile/MobileSicknsDtlR.ms?hiKncrCode=VC&sKncrCode=VC011205&dtlKey=D00000195&pageIndex=1//질병상세페이지//고추탄저병
export default PesticideSearch;
