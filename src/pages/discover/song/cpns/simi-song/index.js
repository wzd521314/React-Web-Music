import React, { memo, useEffect } from 'react';
import {NavLink} from 'react-router-dom'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import {getSongDetailAction , addSongAction} from "@/pages/player/store"

import ZDThemeHeaderPlayer from '@/components/theme-header-player';

import {SimiSongWrapper} from './style'
export default memo(function ZDSimiSong() {
  const dispatch = useDispatch()
  const { simiSongs } = useSelector(state => ({
    simiSongs: state.songInfo.get("simiSong")
  }), shallowEqual);

  const playMusic = (id) => {
    dispatch(getSongDetailAction(id))
  }

  const addMusic = (id) => {
    dispatch(addSongAction(id))
  }


  return (
    <SimiSongWrapper>
      <ZDThemeHeaderPlayer title="相似歌曲" />
      <div className="songs">
        {
          simiSongs.map((item, index) => {
            return (
              <div className="song-item text-nowrap" key={item.id}>
                <div className="info text-nowrap">
                  <div className="title text-nowrap">
                    <NavLink to={`/discover/song?id=${item.id}`}>{item.name}</NavLink>
                  </div>
                  <div className="artist text-nowrap">
                    <a href="javascript:;">{item.artists[0].name}</a>
                  </div>
                </div>
                <div className="operate">
                  <button className="item sprite_icon3 play" onClick={e => playMusic(item.id)}></button>
                  <button className="item sprite_icon3 add" onClick={e => addMusic(item.id)}></button>
                </div>
              </div>
            )
          })
        }
      </div>
    </SimiSongWrapper>
  )
})
