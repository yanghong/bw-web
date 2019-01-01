import * as url from './urlConfig'
import axios from 'axios'

export function register(params){
    return axios.get(url.register, {params}).then((response) => {
      return response.data
    })
};

export function saveChange(params){
  return axios.get(url.saveChange, {params}).then((response) => {
    return response.data
  })
};

export function changePwd(params){
  return axios.get(url.changePwd, {params}).then((response) => {
    return response.data
  })
};

export function login(params){
  return axios.get(url.login, {params}).then((response) => {
    return response.data
  })
};

export function checkUnique(params){
  return axios.get(url.checkUnique, {params}).then((response) => {
    return response.data
  })
};

export function cancelFollow(params){
  return axios.get(url.cancelFollow, {params}).then((response) => {
    return response.data
  })
};

export function follow(params){
  return axios.get(url.follow, {params}).then((response) => {
    return response.data
  })
};

export function getFollowersList(params){
  return axios.get(url.getFollowersList, {params}).then((response) => {
    return response.data
  })
};

export function getFansList(params){
  return axios.get(url.getFansList, {params}).then((response) => {
    return response.data
  })
};

export function getUserInfo(params){
  return axios.get(url.getById, {params}).then((response) => {
    return response.data
  })
};
