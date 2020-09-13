import {Map} from 'immutable'

import {PLAYLIST_CATEGORIES, PLAYLIST_CURRENT_CATEGORIES, PLAYLIST_CURRENT_SONG_LISTS} from './constants'

const defaultState  = Map({
  categories: [],
  currentCategories: "全部",
  currentSongLists: {}
})

export default function (state = defaultState, action) {
  switch (action.type) {
    case PLAYLIST_CATEGORIES:
      return state.set("categories" ,action.categories)
    case PLAYLIST_CURRENT_CATEGORIES:
      return state.set("currentCategories", action.currentCategories)
    case PLAYLIST_CURRENT_SONG_LISTS:
      return state.set("currentSongLists", action.currentSongLists)
    default:
      return state
  }
}