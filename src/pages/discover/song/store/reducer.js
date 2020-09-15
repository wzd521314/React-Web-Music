import {Map} from 'immutable'
import {SIMI_PLAYLIST, SIMI_SONG, CURRENT_SONG, CURRENT_SONG_LYRIC} from './constants'

const defaultState  = Map({
  currentSong: {},
  currentSongLyric: [],
  simiPlaylist: [],
  simiSong: []
})

export default function (state = defaultState, action) {
  switch (action.type) {
    case CURRENT_SONG:
      return state.set("currentSong", action.currentSong)
    case CURRENT_SONG_LYRIC:
      return state.set("currentSongLyric", action.currentSongLyric)
    case SIMI_PLAYLIST:
      return state.set("simiPlaylist", action.simiPlaylist)
    case SIMI_SONG:
      return state.set("simiSong", action.simiSong)
    default:
      return state
  }
}

