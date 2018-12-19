/**
 * Created by guanchun.yu on 2017/11/11.
 */

import fetch from '@/utils/fetch';

export function getList(listQuery, queryParams) {
  return fetch({
    url: '/im_gateway/query/' + listQuery.page + '/' + listQuery.pageSize,
    method: 'post',
    data: queryParams
  });
}

export function update(params) {
  return fetch({
    url: '/im_gateway/update',
    method: 'post',
    data: params
  });
}

export function create(params) {
  return fetch({
    url: '/im_gateway/add',
    method: 'post',
    data: params
  });
}
