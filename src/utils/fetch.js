import axios from 'axios';
import config from '../../config';
import { removeToken } from '../utils/auth';
import router from '../router';

// 创建axios实例
const service = axios.create({
  baseURL: 'http://39.104.108.81:9080/bw', // api的base_url
  timeout: 60000                  // 请求超时时间
});

// request拦截器
service.interceptors.request.use(config => {
  config.withCredentials = true; // 给所有的请求都带上Cookie
  return config;
}, error => {
  // Do something with request error
  Promise.reject(error);
});

// response拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非1003是抛错
     */
    const res = response.data;
    // if (res.code === 1003) {   // TODO
    //   removeToken();
    //   // 重定向到SSO登录页面
    //   window.location.href = config.sso.ssoUrl;
    // } else if (res.code === 1004) {
    //   removeToken();
    //   // code为1004的时候表示是外部系统登录  TODO delete
    //   router.push({ path: '/supplier/login' });
    // } else if (!res.success) {
    //   this.$message.error(res.errMsg ? res.errMsg : res.message);
    //   return Promise.reject();
    // } else {
    //   return res;
    // }
  },
  error => {
    this.$message.error(error.message);
    return Promise.reject(error);
  }
);

export default service;
