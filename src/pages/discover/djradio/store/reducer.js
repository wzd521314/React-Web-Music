import {Map} from 'immutable'
import {DJRADIO_CATEGORY_LIST, DJRADIO_CURRENT_CATEGORY_ID, DJRADIO_RECOMMEND, DJRADIO_RANKING_LIST} from './constants'

const defaultState  = Map({
  categoryList: [],
  currentCategoryId: -1,
  currentCategoryRecommend: [],
  currentCategoryRankingList: []
})

export default function (state = defaultState, action) {
  switch (action.type) {
    case DJRADIO_CATEGORY_LIST:
      return state.set("categoryList", action.categoryList)
    case DJRADIO_CURRENT_CATEGORY_ID:
      return state.set("currentCategoryId", action.currentCategoryId)
    case DJRADIO_RECOMMEND:
      return state.set("currentCategoryRecommend", action.currentCategoryRecommend)
    case DJRADIO_RANKING_LIST:
      return state.set("currentCategoryRankingList", action.currentCategoryRankingList)
    default:
      return state
  }
}