import request from './request'

export function getBanners () {
  return request({
    url: '/banner',
    method: 'get'
  })
}

export function getHotRecommends (count) {
  
  return request({
    url: '/personalized',
    params: {
      limit: count
    },
    method: "get"
  })
}

export function getNewAlbum (count) {
  return request({
    url: '/top/album',
    params: {
      limit: count
    },
    method: 'get'
  })
}

export function getTopList (id) {
  
  return request({
    url: '/playlist/detail',
    params: {
      id
    },
    path: "get"
  })
}

//歌手分类列表
export function getArtistList (limit, type , area) {
  return request({
    url: '/artist/list',
    params: {
      limit,
      type,
      area
    },
    path: 'get'
  })
}