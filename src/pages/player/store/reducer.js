import {Map} from 'immutable'

import {GET_SONG_DETAIL, CHANGE_PLAYLIST, CHANG_CURRENT_SONG_INDEX, CHANG_CURRENT_SONG_SEQUENCE, CHANGE_CURRENT_SONG_LYRIC} from './constants'


const defaultState = Map({
  playList: [],
  currentSongIndex: 0,
  currentSong: {},
  sequence: 0,  //0 全局循环 1 随机播放 2 单曲循环
  currentSongLyric: ''
}) 

export default function (state = defaultState, action){
  switch(action.type) {
    case GET_SONG_DETAIL:
      return state.set("currentSong", action.songDetail)
    case CHANGE_PLAYLIST:
      return state.set("playList", action.playList)
    case CHANG_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.currentSongIndex)
    case CHANG_CURRENT_SONG_SEQUENCE:
      return state.set("sequence", action.sequence)
    case CHANGE_CURRENT_SONG_LYRIC:
      return state.set("currentSongLyric", action.lyric)
    default:
      return state
  }
}