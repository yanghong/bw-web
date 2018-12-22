/**
 * @description: URL解析工具
 **/
export function getUrlParam(param){
  let location = window.location.href;
  let paramUrl = location.split("?")[1];
  if(paramUrl === '' || paramUrl == null){
    return '';
  }
  var paraArr = paramUrl.split('&');
  for(var i = 0;i < paraArr.length;i++){
    if(param === paraArr[i].split('=')[0]){
      return paraArr[i].split('=')[1];
    }
  }
  return '';
}
