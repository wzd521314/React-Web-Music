import request from './request'

//获取歌单详情数据
export function getSongListInfo (id) {
  return request({
    method: 'get',
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
//获取相关推荐歌单
export function getRecommendSongList (id) {
  return request({
    method: 'get',
    url: '/related/playlist',
    params: {
      id
    }
  })
}