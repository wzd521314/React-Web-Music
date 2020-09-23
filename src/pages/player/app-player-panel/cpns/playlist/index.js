import React, { memo } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import classNames from 'classnames';

import {getSongDetailAction , deleteSongAction} from "@/pages/player/store"


import {formatMinuteSecond} from '@/utils/format-utils'
import {PlayListWrapper} from './style'

export default memo(function ZDPlayList() {
  const dispatch = useDispatch()
  const {playList, currentSongIndex} =useSelector(state => ({
    playList: state.playerInfo.get("playList"),
    currentSongIndex: state.playerInfo.get("currentSongIndex")
  }) ,shallowEqual)

  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id))
  }

  const deleteSong = (e ,item) => {
    e.stopPropagation();
    dispatch(deleteSongAction(item.id))
  }

  return (
    <PlayListWrapper>
      {
        playList.map((item, index) => {
          return (
            <div key={item.id}
                 className={classNames("play-item", {"active": currentSongIndex === index})}
                 onClick={e => playMusic(item)}>
              <div className="left text-nowrap">{item.name}</div>
              <div className="right">
                <span className="singer text-nowrap">{item.ar[0].name}</span>
                <span className="duration">{formatMinuteSecond(item.dt)}</span>
                <span className="playlist_sprite link" onClick={e => deleteSong(e , item)}></span>
              </div>
            </div>
          )
        }) 
      }
      {
        playList.length ? undefined : <div className="tips">你还没有添加任何歌曲</div>
      }
    </PlayListWrapper>
  )
})
