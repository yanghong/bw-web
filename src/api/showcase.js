import axios from 'axios'
import * as url from "./urlConfig";

export function getShowcaseListByCategoryOrSearch() {
  return axios.get(url.getShowcaseListByCategoryOrSearch).then((response) => {
    return response.data
  })
};

export function deleteShowcaseById() {
  return axios.get(url.deleteShowcaseById).then((response) => {
    return response.data
  })
};

export function deleteShowcaseById() {
  return axios.get(url.deleteShowcaseById).then((response) => {
    return response.data
  })
};

export function addOrUpdateShowcase() {
  return axios.get(url.addOrUpdateShowcase).then((response) => {
    return response.data
  })
};
