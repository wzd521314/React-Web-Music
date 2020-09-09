import {TOP_BANNERS, HOT_RECOMMEND, NEW_ALBUM, UP_INCREASE_RANKING, NEW_SONG_RANKING, ORIGINAL_SONG_RANKING} from './constants'

import {Map} from 'immutable'


const defaultState = Map({
  topBanners: [],
  hotRecommend: [],
  newAlbums: [],
  upRankingInfo: {},
  newRankingInfo: {},
  originalRankingInfo: {}
})
function reducer(state = defaultState, action) {
  switch(action.type) {
    case TOP_BANNERS:
      return state.set("topBanners", action.topBanners)
    case HOT_RECOMMEND:
      return state.set("hotRecommend", action.hotRecommend)
    case NEW_ALBUM:
      return state.set("newAlbums", action.newAlbums)
    case  UP_INCREASE_RANKING:
      return state.set("upRankingInfo", action.upRankingInfo)
    case  NEW_SONG_RANKING:
      return state.set("newRankingInfo", action.newRankingInfo)
    case  ORIGINAL_SONG_RANKING:
      return state.set("originalRankingInfo", action.originalRankingInfo)
    default:
      return state
  }
}

export default reducer