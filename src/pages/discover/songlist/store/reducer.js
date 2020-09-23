import { Map } from "immutable";
import {SONG_LIST_DETAIL,  RECOMMEND_SONG_LIST} from './constants'

const defaultState = Map({
  songlist: {},
  recommendSonglist: []
})

export default function (state = defaultState , action) {
  switch(action.type) {
    case SONG_LIST_DETAIL:
      return state.set("songlist" , action.songlist)
    case RECOMMEND_SONG_LIST:
      return state.set("recommendSonglist" , action.recommendSongList)
    default:
      return state
  }
}