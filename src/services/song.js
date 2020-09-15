import request from './request'

//获取该对应歌曲信息
export function getSongDetail(ids) {
  return request({
    url: '/song/detail',
    params: {
      ids
    },
    method: 'get'
  })
}
//获取歌曲歌词信息
export function getSongLyric(id) {
  return request({
    url: '/lyric',
    params: {
      id
    },
    method: 'get'
  })
}

//获取包含这首歌的歌单
export function getSimiPlaylist (id) {
  return request({
    method: 'get',
    url: 'simi/playlist',
    params: {
      id
    }
  })
}

//获取相似歌曲
export function getSimiSong (id) {
  return request({
    method: 'get',
    url: 'simi/song',
    params: {
      id
    }
  })
}