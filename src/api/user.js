import * as url from './urlConfig'
import axios from 'axios'

export function register(){
    return axios.get(url.register).then((response) => {
      return response.data
    })
};

export function saveChange(){
  return axios.get(url.saveChange).then((response) => {
    return response.data
  })
};

export function changePwd(){
  return axios.get(url.changePwd).then((response) => {
    return response.data
  })
};

export function login(){
  return axios.get(url.login).then((response) => {
    return response.data
  })
};
