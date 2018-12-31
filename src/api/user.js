import * as url from './urlConfig'
import axios from 'axios'

export const userChangePwd = {
  userChangePwd() {
    return axios.get(url.userChangePwd).then((response) => {
      return response.data
    })
  }
};
