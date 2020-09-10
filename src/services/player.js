import request from './request'

export function getSongDetail(ids) {
  return request({
    url: '/song/detail',
    params: {
      ids
    },
    method: 'get'
  })
}

export function getSongLyric(id) {
  return request({
    url: '/lyric',
    params: {
      id
    },
    method: 'get'
  })
}