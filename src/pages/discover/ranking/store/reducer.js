import { Map } from "immutable";
import {TOP_LIST, CURRENT_TOP_LIST_INDEX, RANKING_LIST_DETAIL} from './constants'

const defaultState = Map({
  rankingToplist: [],
  playList: {},
  currentToplistIndex: 0
})

export default function (state = defaultState , action) {
  switch(action.type) {
    case TOP_LIST:
      return state.set("rankingToplist" , action.toplist)
    case CURRENT_TOP_LIST_INDEX:
      return state.set("currentToplistIndex" , action.index)
    case RANKING_LIST_DETAIL:
      return state.set("playList", action.playList)
    default:
      return state
  }
}