import {Map} from 'immutable'
import {HOT_ALBUM, NEWEST_ALBUM, CURRENT_ALBUM_AREA} from './constants'

const defaultState  = Map({
  topList: [],
  newestList: [],
  currentArea: ""
})

export default function (state = defaultState, action) {
  switch (action.type) {
    case HOT_ALBUM:
      return state.set("topList", action.topList)
    case NEWEST_ALBUM:
      return state.set("newestList", action.newestList)
    case CURRENT_ALBUM_AREA:
      return state.set("currentArea", action.currentArea)
    default:
      return state
  }
}