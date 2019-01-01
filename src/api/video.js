import axios from 'axios'
import * as url from "./urlConfig";

export function videoAddCollection(params) {
  return axios.get(url.videoAddCollection, {params}).then((response) => {
    return response.data
  })
};

export function videoCancelCollection(params) {
  return axios.get(url.videoCancelCollection, {params}).then((response) => {
    return response.data
  })
};

export function getVideoListByCategoryOrSearch(params) {
  return axios.get(url.getVideoListByCategoryOrSearch, {params}).then((response) => {
    return response.data
  })
};

export function getCollectVideos(params) {
  return axios.get(url.getCollectVideos,{params}).then((response) => {
    return response.data
  })
};

export function diss(params) {
  return axios.get(url.diss, {params}).then((response) => {
    return response.data
  })
};

export function getVideoDetailById(params) {
  return axios.get(url.getVideoDetailById, {params}).then((response) => {
    return response.data
  })
};

export function like(params) {
  return axios.get(url.like, {params}).then((response) => {
    return response.data
  })
};

export function addOrUpdateVideos(params) {
  return axios.get(url.addOrUpdateVideos, {params}).then((response) => {
    return response.data
  })
};

export function deleteVideoById(params) {
  return axios.get(url.deleteVideoById, {params}).then((response) => {
    return response.data
  })
};

export function getVideoListByCategoryOrSearch(params) {
  return axios.get(url.getVideoListByCategoryOrSearch, {params}).then((response) => {
    return response.data
  })
};
