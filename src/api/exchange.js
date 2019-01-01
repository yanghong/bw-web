import * as url from './urlConfig'
import axios from 'axios'

export function doExchange(params) {
  return axios.get(url.doExchange, {params}).then((response) => {
    return response.data
  })
};

export function getOrderListByUserId(params) {
  return axios.get(url.getOrderListByUserId, {params}).then((response) => {
    return response.data
  })
};

export function getOrderByOrderId(params) {
  return axios.get(url.getOrderByOrderId, {params}).then((response) => {
    return response.data
  })
};

export function getExchangeInfosByType(params) {
  return axios.get(url.getExchangeInfosByType, {params}).then((response) => {
    return response.data
  })
};

