import { request } from '../../network/require';

export function getUser(params) {
  return request({
    url: `${process.env.VUE_APP_API}/user`,
    method: 'get',
    params
  });
}
export function getTableData(data) {
  return request({
    url: `${process.env.VUE_APP_API}/userData`,
    method: 'post',
    data
  });
}