import axios from 'axios'
import * as url from "./urlConfig";

export function getShowcaseListByCategoryOrSearch(params) {
  return axios.get(url.getShowcaseListByCategoryOrSearch, {params}).then((response) => {
    return response.data
  })
};

export function deleteShowcaseById(params) {
  return axios.get(url.deleteShowcaseById, {params}).then((response) => {
    return response.data
  })
};

export function getDetailById(params) {
  return axios.get(url.getDetailById, {params}).then((response) => {
    return response.data
  })
};

export function addOrUpdateShowcase(params) {
  return axios.get(url.addOrUpdateShowcase, {params}).then((response) => {
    return response.data
  })
};

export function likeShowcase(params) {
  return axios.get(url.likeShowcase, {params}).then((response) => {
    return response.data
  })
};

export function getCollectShowcases(params) {
  return axios.get(url.getCollectShowcases, {params}).then((response) => {
    return response.data
  })
};

export function cancelCollection(params) {
  return axios.get(url.cancelCollection, {params}).then((response) => {
    return response.data
  })
};

export function addCollection(params) {
  return axios.get(url.addCollection, {params}).then((response) => {
    return response.data
  })
};

