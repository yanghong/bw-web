import axios from 'axios'
import * as url from "./urlConfig";

export function getVideoListByCategoryOrSearch() {
  return axios.get(url.getVideoListByCategoryOrSearch).then((response) => {
    return response.data
  })
};

export function deleteVideoById() {
  return axios.get(url.deleteVideoById).then((response) => {
    return response.data
  })
};

export function addOrUpdateVideos() {
  return axios.get(url.addOrUpdateVideos).then((response) => {
    return response.data
  })
};

export function getVideoListByCategoryOrSearch() {
  return axios.get(url.getVideoListByCategoryOrSearch).then((response) => {
    return response.data
  })
};
