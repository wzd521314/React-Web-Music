import {getSongDetail, getSongLyric, getSimiPlaylist, getSimiSong} from '@/services/song.js'

import {SIMI_PLAYLIST, SIMI_SONG, CURRENT_SONG, CURRENT_SONG_LYRIC} from './constants'
import {parseLyric} from '@/utils/parse-lyric'


const CurrentSongAction = currentSong => ({
  type: CURRENT_SONG,
  currentSong
})

const CurrentSongLyricAction = currentSongLyric => ({
  type: CURRENT_SONG_LYRIC,
  currentSongLyric
})


export const changeCurrentSongLyricAction = (id) => {
  return (dispatch) => {
    getSongLyric(id).then(res => {
      const lyricArray = parseLyric(res.data.lrc.lyric)
      dispatch(CurrentSongLyricAction(lyricArray))
    })
  }
}

export const changeCurrentSongAction = (id) => {
  return (dispatch) => {
    getSongDetail(id).then(res => {
      const songInfo  = res.data.songs[0]
      dispatch(CurrentSongAction(songInfo))
    })
  }
}



const changeSimiPlaylist = simiPlaylist => ({
  type: SIMI_PLAYLIST,
  simiPlaylist
})

const changeSimiSong = simiSong => ({
  type: SIMI_SONG,
  simiSong
})

export const changeSimiPlaylistAction = (id) => {
  return (dispatch) => {
    getSimiPlaylist(id).then(res => {
      dispatch(changeSimiPlaylist(res.data.playlists))
    })
  }
}

export const changeSimiSongAction = (id) => {
  return (dispatch) => {
    getSimiSong(id).then(res => {
      dispatch(changeSimiSong(res.data.songs))
    })
  }
}