import * as url from './urlConfig'
import axios from 'axios'

export function addOrUpdateBrand() {
  return axios.get(url.addOrUpdateBrand).then((response) => {
    return response.data
  })
};

export function checkCreateBrand() {
  return axios.get(url.checkCreateBrand).then((response) => {
    return response.data
  })
};

export function getOwnBrand() {
  return axios.get(url.getOwnBrand).then((response) => {
    return response.data
  })
};

