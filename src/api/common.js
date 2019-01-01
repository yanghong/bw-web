import axios from 'axios'
import * as url from "./urlConfig";

export function checkVcode(params) {
  return axios.get(url.checkVcode, {params}).then((response) => {
    return response.data
  })
};

export function sendMailVcode(params) {
  return axios.get(url.sendMailVcode, {params}).then((response) => {
    return response.data
  })
};

export function checkMailAndVcode(params) {
  return axios.get(url.checkMailAndVcode, {params}).then((response) => {
    return response.data
  })
};

export function upload(params) {
  return axios.get(url.upload, {params}).then((response) => {
    return response.data
  })
};

export function getVcode(params) {
  return axios.get(url.getVcode,{params}).then((response) => {
    return response.data
  })
};
