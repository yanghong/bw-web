import fetch from '../utils/fetch.js';

export function userChangePwd(queryParams) {
  return fetch({
    url: '/user/web/changePwd',
    method: 'post',
    data: queryParams
  });
}

