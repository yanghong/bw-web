import axios from 'axios'
import * as url from "./urlConfig";

export function getCategotys() {
    return axios.get(url.getCategorys).then((response) => {
      return response.data
    })
};

export function getCarouselList() {
  return axios.get(url.getCarouselList).then((response) => {
    return response.data
  })
};

