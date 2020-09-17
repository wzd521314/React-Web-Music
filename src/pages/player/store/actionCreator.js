import {getSongDetail, getSongLyric}  from '@/services/player.js'
import {getRandomNumber} from '@/utils/math-utils'
import {parseLyric} from '@/utils/parse-lyric'

import {GET_SONG_DETAIL, CHANGE_PLAYLIST, CHANG_CURRENT_SONG_INDEX, CHANG_CURRENT_SONG_SEQUENCE, CHANGE_CURRENT_SONG_LYRIC, CHANGE_CURRENT_SONG_LYRIC_INDEX} from './constants'


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

export const changeCurrentSongLyricIndexAction = (index) => ({
  type: CHANGE_CURRENT_SONG_LYRIC_INDEX,
  currentSongLyricIndex: index
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

//将歌曲添加到歌单内
export function addSongAction (ids) {
  return (dispatch, getState) => {
    //根据id查找playlist是否已经有了该歌曲
    const playlist = getState().playerInfo.get("playList")
    const index = playlist.findIndex (item => item.id === ids)
    let song = null

    if(index !== -1) {
      //如果歌单内存在该歌曲，则return出去
      return
    }else {
      //如果歌单内没有该歌曲，则添加到歌单内
      getSongDetail(ids).then(res => {
        song = res.data.songs &&  res.data.songs[0]
        if(!song) return
        const newPlaylist = [...playlist]
        newPlaylist.push(song)
        dispatch(changePlaylist(newPlaylist))
      })
    }
  }
}

//将所有绑单内的歌曲添加到歌单内
export function addGroupSongAction (tracks) {
  return (dispatch, getState) => {
    const playlist = getState().playerInfo.get("playList")
    const newPlaylist = [...playlist, ...tracks]

    dispatch(changePlaylist(newPlaylist))
    // //根据id查找playlist是否已经有了该歌曲
    // const playlist = getState().playerInfo.get("playList")
    // const index = playlist.findIndex (item => item.id === ids)
    // let song = null

    // if(index !== -1) {
    //   //如果歌单内存在该歌曲，则return出去
    //   return
    // }else {
    //   //如果歌单内没有该歌曲，则添加到歌单内
    //   getSongDetail(ids).then(res => {
    //     song = res.data.songs &&  res.data.songs[0]
    //     if(!song) return
    //     const newPlaylist = [...playlist]
    //     newPlaylist.push(song)
    //     dispatch(changePlaylist(newPlaylist))
    //   })
    // }
  }
}

//将歌曲从歌单内删除
export function deleteSongAction (ids) {
  return (dispatch, getState) => {
    //根据id查找playlist是否已经有了该歌曲
    const playlist = getState().playerInfo.get("playList")
    const currentSongIndex = getState().playerInfo.get("currentSongIndex")
    const index = playlist.findIndex (item => item.id === ids)

    const newPlaylist = [...playlist]
    newPlaylist.splice(index, 1)

    //首先判断删除的歌曲是否是当前歌曲，不是的话直接删掉就行了
    if(playlist[currentSongIndex].id === ids) {
      if(index !== -1) {
        //如果歌单类有这首歌，则将其从歌单删除
          //如果删除的不是是最后那一首歌曲则需要切换到下一首
        if(index !== playlist.length - 1) {
          const song = playlist[index + 1]
          dispatch(changeCurrentSongIndexAction(index))
          dispatch(changeCurrentSongAction(playlist[index + 1]))
          getSongLyric(song.id).then(res => {
            const lyricArray = parseLyric(res.data.lrc.lyric)
            dispatch(changeLyric(lyricArray))
          })
        }else {
          //如果是列表最下面那一首则切换到上一首
            //如果是整个列表的最后一首歌那就返回
          if(index === 0) {
            dispatch(changePlaylist(newPlaylist))
            return
          } ;
          const song = playlist[index - 1]
          dispatch(changeCurrentSongIndexAction(index - 1))
          dispatch(changeCurrentSongAction(playlist[index - 1]))
          getSongLyric(song.id).then(res => {
            const lyricArray = parseLyric(res.data.lrc.lyric)
            dispatch(changeLyric(lyricArray))
          })
  
        }
        dispatch(changePlaylist(newPlaylist))
  
      }
    }else {
      dispatch(changePlaylist(newPlaylist))
    }
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