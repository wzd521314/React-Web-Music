import request from './request'

export function getCatList () {
  return request({
    method: 'get',
    url: '/playlist/catlist'
  })
}

export function getCategoryPlaylist (cat  , offset, order = "hot", limit= 35) {
  
  return request({
    url: '/top/playlist',
    method: 'get',
    params: {
      order,
      cat,
      offset,
      limit

    }
  })
}