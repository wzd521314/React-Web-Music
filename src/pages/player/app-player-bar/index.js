import React, { memo, useEffect, useRef, useCallback, useState } from 'react'
import {useSelector, useDispatch, shallowEqual} from 'react-redux'
import ZDAppPlayerPanel from '../app-player-panel'

import {changeSequenceAction, getSongDetailAction, changeMusicAction, changeCurrentSongLyricIndexAction} from  '../store/actionCreator'
import {getSizeImage, formatDate, getPlaySong} from '@/utils/format-utils'

import {Slider} from 'antd'
import {NavLink} from 'react-router-dom'


import {PlayBarWrapper, Control, PlayInfo, Operator} from './style'
export default memo(function ZDAppPlayerBar() {
  //props and state
  const [currentTime, setCurrentTime] = useState(0)
  const [isChanging, setIsChanging] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isInit, setInit] = useState(true)
  const [progress, setProgress] = useState(0)
  const [isPanelShow, setIsPanelShow] = useState(false)
  //redux-hook
  const dispatch = useDispatch()
  useEffect(() => {
    //默认打开页面自动加载疯人院歌曲
    dispatch(getSongDetailAction(1439111141))
  }, [dispatch])
  const {currentSong, sequence, currentSongLyric, currentSongLyricIndex } = useSelector(state => ({
    currentSong: state.playerInfo.get("currentSong"),
    sequence: state.playerInfo.get("sequence"),
    currentSongLyric: state.playerInfo.get("currentSongLyric"),
    currentSongLyricIndex: state.playerInfo.get("currentSongLyricIndex")
  }) ,shallowEqual)
  //当当前歌曲发生改变时调用该函数
  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id)
    //第一次加载时不调用
    if(isInit) {
      setInit(false)
    }else {
      setCurrentTime(0)
      //这里之所以用promise是因为当你设置了src地址而立马调用play方法时，由于资源没来得及加载则会报错，我们可以在资源加载失败时设置播放状态为false
      audioRef.current.play().then(res => {
        setIsPlaying(true)  
      }).catch(err => {
        setIsPlaying(false)
      })
    }
  
  }, [currentSong])
  
  


  //other hook
  const audioRef = useRef()

  const changeSequence = useCallback(() => {
    let currentSequence = sequence + 1
    if(currentSequence > 2) currentSequence = 0;
    
    dispatch(changeSequenceAction(currentSequence))
  }, [sequence, dispatch])
  //点击播放/暂停按钮
  const playSong = useCallback(
    () => {
      setIsPlaying(!isPlaying)
      isPlaying ? audioRef.current.pause() : audioRef.current.play()
    },
    [audioRef, isPlaying],
  )
  //点击切换上一首/下一首
  const changeMusic = tag => {
    dispatch(changeMusicAction(tag))
  }
  //当歌曲播放完毕时会触发该函数，实现currentSong的改变
  const handleMusicEnded = () => {
    if(sequence === 2) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0;
      audioRef.current.play()
    } else {
      dispatch(changeMusicAction(1))
    }
  }

  const timeUpdate = useCallback((e) => {
    //当滑块滑动时就不能在这里更新时间了
    const currentTimeOrigin = e.target.currentTime
    if(!isChanging) {
      setCurrentTime(e.target.currentTime * 1000)
      setProgress((currentTime / currentSong.dt) * 100)
    }
    //更新当前播放时间

    let lrcLength = currentSongLyric.length
    
    let i = 0;
    let finalIndex = null;
    for(; i< lrcLength; i++ ) {
      const lrcTime = currentSongLyric[i].time
      if(currentTimeOrigin*1000 < lrcTime) {


        finalIndex = i - 1
        
        break
        
      }
    }

    
    if(finalIndex !== currentSongLyricIndex) {
      dispatch(changeCurrentSongLyricIndexAction(finalIndex))
    }
  }, [currentSong.dt, currentTime, isChanging])

  
  // console.log((currentTime / currentSong.dt) * 100)
  // console.log(progress)
  
  //当滑块滑动时，更新currentTime显示的时间（仅仅只是更新显示的时间）
  const sliderChange = useCallback( (value) => {
    //当滑块滑动时，将isChanging设置为true
    setIsChanging(true)

    setProgress(value)
    
    setCurrentTime((value / 100) * currentSong.dt)
  } ,[currentSong])
  //当点击滑块的某个地方直接跳转或者拖动滑块松手后，则需要更新audio.currentTime属性，改变播放的真实时间
  const sliderAfterChange = useCallback( (value) => {
    //当滑动结束或跳转结束后，将isChanging设置为false
    setIsChanging(false)
    audioRef.current.currentTime = value / 100 * currentSong.dt / 1000

    if(!isPlaying) {
      playSong()
    }
    
    
  } ,[currentSong.dt, isPlaying, playSong])
  
  const picUrl = currentSong.al && currentSong.al.picUrl
  
  return (
    <PlayBarWrapper className="sprite_player" >
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_player prev" onClick={e => changeMusic(-1)}></button>
          <button className="sprite_player play" onClick={e => playSong()}></button>
          <button className="sprite_player next" onClick={e => changeMusic(1)}></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/song">
              <img src={getSizeImage(picUrl, 35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <a href="/#" className="singer-name">{currentSong.ar && currentSong.ar[0].name}</a>
            </div>
            <div className="progress">
              {/* 当前进度为当前时间/总时长 乘以 100 */}
              <Slider value={progress}  
                      onAfterChange={sliderAfterChange}
                      onChange={sliderChange}
                      tooltipVisible={false}>
              </Slider>
              <div className="time">
                <span className="now-time">{formatDate(currentTime, "mm:ss")}</span>
                <span className="divider">/</span>
                <span className="duration">{formatDate(currentSong.dt, "mm:ss")}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop"  onClick={changeSequence}></button>
            <button className="sprite_player btn playlist" onClick={e => setIsPanelShow(!isPanelShow)}></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={e => timeUpdate(e)} onEnded={e => {handleMusicEnded()}}></audio>
      {/* {isPanelShow && } */}
      <ZDAppPlayerPanel  height1={isPanelShow ? "301px" : "0px"}/>
    </PlayBarWrapper>
  )
})