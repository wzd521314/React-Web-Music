import  request from './request'

export const getRadioCategoryList = () => request({
  url: '/dj/catelist',
  method: 'get'
})

export const getRadioRecommend = (typeId) => request({
  url: '/dj/recommend/type',
  params: {
    type: typeId
  },
  method: 'get'
})

export const getRadioRankingList = (typeId, offset = 0, limit = 30) => request({
  url: '/dj/radio/hot',
  params: {
    cateId: typeId,
    limit,
    offset
  },
  method: 'get'
})