import * as url from './urlConfig'
import axios from 'axios'

export function addOrUpdateBrand(params) {
  return axios.get(url.addOrUpdateBrand, {params}).then((response) => {
    return response.data
  })
};

export function checkCreateBrand(params) {
  return axios.get(url.checkCreateBrand, {params}).then((response) => {
    return response.data
  })
};

export function getOwnBrand(params) {
  return axios.get(url.getOwnBrand, {params}).then((response) => {
    return response.data
  })
};

export function getCollectBrands(params) {
  return axios.get(url.getCollectBrands, {params}).then((response) => {
    return response.data
  })
};

export function addBrandCollection(params) {
  return axios.get(url.addBrandCollection, {params}).then((response) => {
    return response.data
  })
};

export function cancelBeandCollection(params) {
  return axios.get(url.cancelBeandCollection, {params}).then((response) => {
    return response.data
  })
};


