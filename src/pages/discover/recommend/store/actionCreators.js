import {TOP_BANNERS, HOT_RECOMMEND, NEW_ALBUM, UP_INCREASE_RANKING, NEW_SONG_RANKING, ORIGINAL_SONG_RANKING, SETTLE_SINGER_LIST} from './constants'

import {getBanners, getHotRecommends, getNewAlbum, getTopList , getArtistList} from '@/services/recommend.js'

//获取轮播图数据
export function getTopBannersAction() {
  let bannerAction = {
    type: TOP_BANNERS,
    topBanners: []
  }
  return (dispatch) => {
    getBanners().then(res=> {
      bannerAction.topBanners = res.data.banners
      dispatch(bannerAction)
    })
  }
} 
//获取热门推荐数据
export function getHotRecommendAction(count) {
  let hotRecommendAction = {
    type: HOT_RECOMMEND,
    hotRecommend: []
  }
  return (dispatch) => {
    getHotRecommends(count).then(res => {
      hotRecommendAction.hotRecommend = res.data.result

      
      dispatch(hotRecommendAction)
    })
  }
}




//获取新碟上架数据
export function getNewAlbumAction(count) {
  let newAlbumAction = {
    type: NEW_ALBUM,
    newAlbums: []
  }
  return dispatch => {
    getNewAlbum(count).then(res => {
      newAlbumAction.newAlbums = res.data.monthData

      
      dispatch(newAlbumAction)
    })
  }
}

//获取三个榜单的数据
export function getTopListAction (id) {
  const upRankingInfoAction = {
    type: UP_INCREASE_RANKING,
    upRankingInfo: {}
  }
  const newRankingInfoAction = {
    type: NEW_SONG_RANKING,
    newRankingInfo: {}
  }
  const originalRankingInfoAction = {
    type: ORIGINAL_SONG_RANKING,
    originalRankingInfo: {}
  }
  return dispatch => {
    getTopList(id).then(res=> {
      switch (id) {
        case 19723756 :
          upRankingInfoAction.upRankingInfo = res.data.playlist
          dispatch(upRankingInfoAction)
          break
        case 3779629 :
          newRankingInfoAction.newRankingInfo = res.data.playlist
          dispatch(newRankingInfoAction)
          break
        case 2884035 :
          originalRankingInfoAction.originalRankingInfo = res.data.playlist
          dispatch(originalRankingInfoAction)
          break
        default:
      }
      
    })
  }
}


//获取入驻歌手信息
const settleSingerAction = (settleSingerList) => ({
  type: SETTLE_SINGER_LIST,
  settleSingerList
})
export function changeSettleSingerAction (limit , type , area) {
  return (dispatch) => {
    getArtistList(limit , type , area).then(res => {
      dispatch(settleSingerAction(res.data.artists))
    })
  }
}