import request from './request'

export function getTopList() {
  return request({
    method: 'get',
    url: '/toplist'
  })
}

export function getPlayList (id) {
  return request({
    method: 'get',
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
