import request from './request'
 
export const getHotArtist = () => request({
  method: 'get',
  url: '/top/artists'
})

export const getArtistList = (type, area, initial , limit=100) => request({
  method: 'get',
  url: '/artist/list',
  params: {
    type,
    area,
    initial,
    limit
  }
})