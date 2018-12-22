import crypto from "crypto"
import $ from "jquery";

/**
 * 图片上传
 * @param file
 * @returns {Promise<any>}
 */
export function uploadImg(file) {

  let options = {
    x: 0,
    y: 0,
    width: 6000,
    height: 6000
  }

  let x = options.x;
  let y = options.y;
  let width = options.width;
  let height = options.height;


  let md5 = crypto.createHash("md5");
  let crop = x + "," + y + "," + width + "," + height;
  md5.update(`"` + crop + `";"auto";"80";images;9fa865a1a52e283ace86894608f7e6ff`);
  let sign = md5.digest("hex");
  let formData = new FormData();
  formData.append("file", file);
  formData.append("crop", crop);
  formData.append("quality", '80');
  formData.append("rotate", 'auto');
  formData.append("space", 'images');
  formData.append('appId', '1063');
  formData.append("sign", sign);
  return new Promise((resolve, reject) => {
    $.ajax({
      url: 'http://open.hmp2.fi.beibei.com/system/img/uploadFile',
      processData: false,
      contentType: false,
      cache: false,
      data: formData,
      type: 'post',
      dataType: 'json',
      success: function (data) {
        resolve(data);
      }
    });
  })
}

