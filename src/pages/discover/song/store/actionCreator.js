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
  return async (dispatch) => {
    await  getSongLyric(id).then(res => {
      if(!res.data.lrc) {
        dispatch(CurrentSongLyricAction([]))
      }else {
        const lyricArray = parseLyric(res.data.lrc.lyric)
        dispatch(CurrentSongLyricAction(lyricArray))
      }
    // const lyricArray = parseLyric(res.data.lrc.lyric)
    // dispatch(CurrentSongLyricAction(lyricArray))
    })

    return Promise.resolve()
  }
}

export const changeCurrentSongAction = (id) => {
  return  async (dispatch) => {
    await  getSongDetail(id).then(res => {
      const songInfo  = res.data.songs[0]
      dispatch(CurrentSongAction(songInfo))
    })

    return Promise.resolve()
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
  return  async (dispatch) => {
    await getSimiPlaylist(id).then(res => {
      dispatch(changeSimiPlaylist(res.data.playlists))
    })

    return Promise.resolve()
  }
}

export const changeSimiSongAction = (id) => {
  return  async (dispatch) => {
    await getSimiSong(id).then(res => {
      dispatch(changeSimiSong(res.data.songs))
    })

    return Promise.resolve()
  }
}