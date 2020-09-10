import {getSongDetail, getSongLyric}  from '@/services/player.js'
import {getRandomNumber} from '@/utils/math-utils'
import {parseLyric} from '@/utils/parse-lyric'

import {GET_SONG_DETAIL, CHANGE_PLAYLIST, CHANG_CURRENT_SONG_INDEX, CHANG_CURRENT_SONG_SEQUENCE, CHANGE_CURRENT_SONG_LYRIC} from './constants'


const changeCurrentSongIndexAction = index => ({
  type: CHANG_CURRENT_SONG_INDEX,
  currentSongIndex: index
})

const changeCurrentSongAction = info => ({
  type: GET_SONG_DETAIL,
  songDetail: info
})

const changePlaylist = playlist => ({
  type: CHANGE_PLAYLIST,
  playList: playlist
})

const changeSequence = (sequence) => ({
  type: CHANG_CURRENT_SONG_SEQUENCE,
  sequence
})

const changeLyric = (lyric) => ({
  type: CHANGE_CURRENT_SONG_LYRIC,
  lyric
})


export  function changeMusicAction (tag) {
  return (dispatch, getState) => {
    
    let currentIndex = getState().playerInfo.get("currentSongIndex")
    const playlist = getState().playerInfo.get("playList")
    switch (getState().playerInfo.get("sequence")) {
      case 1: //表示随机播放
        
        currentIndex = getRandomNumber(playlist.length, currentIndex)
        break
      default: //表示单曲循环和顺序播放都是切换到下一首
        currentIndex += tag
        
        if(currentIndex >= playlist.length) currentIndex = 0 ;
        if(currentIndex < 0) currentIndex = playlist.length - 1;

    }
    const currentSong = playlist[currentIndex]
    dispatch(changeCurrentSongAction(currentSong))
    dispatch(changeCurrentSongIndexAction(currentIndex))
    
    getSongLyric(currentSong.id).then(res => {
      const lyricArray = parseLyric(res.data.lrc.lyric)
      dispatch(changeLyric(lyricArray))
    })
  }
}

export function changeSequenceAction (sequence) {
  return (dispatch) => {
    dispatch(changeSequence(sequence))
  }
}

export function getSongDetailAction (ids)  {

  return (dispatch, getState) => {

    //1. 根据id查找playlist是否已经有了该歌曲
    const playlist = getState().playerInfo.get("playList")
    const index = playlist.findIndex (item => item.id === ids)
    let song = null
    //2. 判断歌单内是否存在歌曲
    if(index !== -1){
      //2.1 如果歌单内存在该歌曲，则将CurrentSongIndex和CurrentSong修改为该歌曲
      song = playlist[index]
      dispatch(changeCurrentSongIndexAction(index))
      dispatch(changeCurrentSongAction(playlist[index]))
      getSongLyric(song.id).then(res => {
        const lyricArray = parseLyric(res.data.lrc.lyric)
        dispatch(changeLyric(lyricArray))
      })
    }else {
      //2.2 没有找到该歌曲，则需要请求该歌曲的数据
      getSongDetail(ids).then(res => {
        song = res.data.songs &&  res.data.songs[0]
        
        if(!song) return

        const newPlaylist = [...playlist]
        newPlaylist.push(song)
        //请求到该歌曲数据后放入playlist中和修改CurrentSong、CurrentSongIndex
        dispatch(changePlaylist(newPlaylist))
        dispatch(changeCurrentSongIndexAction(newPlaylist.length - 1))
        dispatch(changeCurrentSongAction(song))
        getSongLyric(song.id).then(res => {
          const lyricArray = parseLyric(res.data.lrc.lyric)
          dispatch(changeLyric(lyricArray))
          })
      })
    }
    
    
    

  }
}