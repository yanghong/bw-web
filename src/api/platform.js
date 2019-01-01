import * as url from './urlConfig'
import axios from 'axios'

export function getCountryByCityId(params) {
  return axios.get(url.getCountryByCityId, {params}).then((response) => {
    return response.data
  })
};

export function getCityByProvinceId(params) {
  return axios.get(url.getCityByProvinceId, {params}).then((response) => {
    return response.data
  })
};

export function getProvinceList(params) {
  return axios.get(url.getProvinceList, {params}).then((response) => {
    return response.data
  })
};

