import { WebView } from "react-native-webview";

function PesticideSearch({ route }) {
  const pest = route.params.pest;
  console.log(pest);
  console.log(url);
  let url;
  if (pest === "고추탄저병")
    url =
      "https://psis.rda.go.kr/psis/agc/res/agchmRegistStusLst.ps?menuId=PS00263&sAgCropsYn1=Y&sAgCropsNm1=고추&sAgDbyhsYn1=Y&sAgApplcDbyhsNm1=탄저병";
  else if (pest === "고추흰가루병")
    url =
      "https://psis.rda.go.kr/psis/agc/res/agchmRegistStusLst.ps?menuId=PS00263&sAgCropsYn1=Y&sAgCropsNm1=고추&sAgDbyhsYn1=Y&sAgApplcDbyhsNm1=흰가루병";
  else if (pest === "배추검음썩음병")
    url =
      "https://psis.rda.go.kr/psis/agc/res/agchmRegistStusLst.ps?menuId=PS00263&sAgDbyhsYn1=Y&sAgApplcDbyhsNm1=검은썩음병";
  else if (pest === "배추노균병")
    url =
      "https://psis.rda.go.kr/psis/agc/res/agchmRegistStusLst.ps?menuId=PS00263&sAgCropsYn1=Y&sAgCropsNm1=배추&sAgDbyhsYn1=Y&sAgApplcDbyhsNm1=노균병";
  else if (pest === "파검은무늬병")
    url =
      "https://psis.rda.go.kr/psis/agc/res/agchmRegistStusLst.ps?menuId=PS00263&sAgCropsYn1=Y&sAgCropsNm1=파&sAgDbyhsYn1=Y&sAgApplcDbyhsNm1=검은무늬병";
  else if (pest === "파노균병")
    url =
      "https://psis.rda.go.kr/psis/agc/res/agchmRegistStusLst.ps?menuId=PS00263&sAgCropsYn1=Y&sAgCropsNm1=파&sAgDbyhsYn1=Y&sAgApplcDbyhsNm1=노균병";
  else if (pest === "파녹병")
    url =
      "https://psis.rda.go.kr/psis/agc/res/agchmRegistStusLst.ps?menuId=PS00263&sAgCropsYn1=Y&sAgCropsNm1=파&sAgDbyhsYn1=Y&sAgApplcDbyhsNm1=녹병";

  console.log(pest);
  console.log(url);
  return <WebView source={{ uri: url }} />;
}

export default PesticideSearch;
