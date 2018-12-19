// 工具函数

export function filterSearchObj(obj) {
  var res = {};
  for (var k in obj) {
    res[k] = obj[k].toString().trim() !== '' && parseInt(obj[k], 10) !== -1 ? obj[k].toString().trim() : undefined;
  }
  return res;
}

/**
 * get请求完整参数拼接
 * @param props
 * @returns {function(*)}
 */
export function getFullPathFN(props = []) {
  return prefix => {
    var qs = props.map(prop => {
      return `${prop}=${this[prop]}`;
    }).join("&");

    return `${prefix}?${qs}`;
  }
}

/**
 * 将一个单词首字母转为大写
 */
export function titleCase(str) {
  return str.replace(/(\w)/,function(v){return v.toUpperCase()});
}

/**
 * 不刷新页面改变location
 */
export function setLocationUrl(obj, filterObj = {}) {
  var queryStr = '?';
  for (var prop in obj) {
    if (!filterObj.hasOwnProperty(prop)) {
      queryStr += prop.toString() + '=' + decodeURI(obj[prop].toString()) + '&';
    }
  }
  var local;
  if(location.hash.split('?').length > 1) {
    local = location.hash.split('?')[0];
  }
  var newUrl;
  if(local == undefined) {
    newUrl = location.origin + location.hash + queryStr.substr(0, queryStr.length - 1);
  } else {
    newUrl = location.origin + local + queryStr.substr(0, queryStr.length - 1);
  }
  window.history.pushState(null, document.title, newUrl);
}

export function timeFormat(timestamp, format) {
  var date = {
    'M+': timestamp.getMonth() + 1,
    'd+': timestamp.getDate(),
    'h+': timestamp.getHours(),
    'm+': timestamp.getMinutes(),
    's+': timestamp.getSeconds(),
    'q+': Math.floor((timestamp.getMonth() + 3) / 3),
    'S+': timestamp.getMilliseconds()
  };

  if (/(y+)/i.test(format)) {
    format = format.replace(RegExp.$1, (timestamp.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  for (var k in date) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? date[k] : ('00' + date[k]).substr(('' + date[k]).length));
    }
  }

  return format;
}


export function zeroTimestamp(date) {
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return Date.parse(date) / 1000;
}

export function beforeEnterRedirect(to, next, name) {
  if (_isMobile()) {
    const h5_target = { name, params: to.params };
    next(h5_target);
    // next(vm => { vm.$router.push(h5_target); });
  } else {
    next();
  }
}

function _isMobile() {
  return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
}


