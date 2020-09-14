import request from './request'

export const getTopAlbum = () => request({
  method: 'get',
  url: '/album/newest'
})

export const getNewAlbum = (area , offset, limit = 35) => request({
  method: 'get',
  url: '/album/new',
  params: {
    area,
    offset,
    limit
  }
})