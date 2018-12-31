import axios from 'axios'
import * as url from "./urlConfig";

export function checkVcode() {
  return axios.get(url.checkVcode).then((response) => {
    return response.data
  })
};

export function sendMailVcode() {
  return axios.get(url.sendMailVcode).then((response) => {
    return response.data
  })
};

export function checkMailAndVcode() {
  return axios.get(url.checkMailAndVcode).then((response) => {
    return response.data
  })
};

export function upload() {
  return axios.get(url.upload).then((response) => {
    return response.data
  })
};

export function getVcode() {
  return axios.get(url.getVcode).then((response) => {
    return response.data
  })
};
