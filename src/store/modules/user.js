import { getUserInfo, login } from '../../api/user';
import Cookies from 'js-cookie';
import ls from '../../utils/localStorage';
import { getToken, setToken, removeToken } from '../../utils/auth';

const expireTime = {
  expires: 60 * 60 * 12
};
const user = {
  state: {
    uid: ls.getItem('uid'),
    name: ls.getItem('name'),
    ssoUid: ls.getItem('ssoUid'),
    account: ls.getItem('account'),
    avatar: ls.getItem('avatar_url'),
    token: getToken(),
    roles: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    }
  },

  actions: {
    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        Cookies.remove('token');
        resolve();
      });
    },
    Login({ commit }, params) {
      return new Promise((resolve) => {
        login(params)
          .then(resp => {
            if (resp && resp.success) {
              commit('SET_TOKEN', resp.data.token);
              setToken(resp.data.token);
              resolve(resp.data.registered);
            }
          });
      });
    },
    // 获取用户信息
    GetUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token)
          .then(resp => {
            if (resp && resp.success) {
              commit('SET_ROLES', resp.data.roles);
              resolve(resp);
            }
          }).catch(error => {
            reject(error);
          });
      });
    },
    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '');
        removeToken();
        resolve();
      });
    },
    // 设置 sso token
    SetSSOToken({ commit }, token) {
      return new Promise(resolve => {
        commit('SET_TOKEN', token);
        setToken(token);
        resolve();
      });
    }
  }
};

export default user;
