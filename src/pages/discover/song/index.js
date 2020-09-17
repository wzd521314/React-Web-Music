import React, { useEffect, memo } from 'react';
import { useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';
import url from 'url'

import ZDSongInfo from './cpns/song-info'
import ZDSimiPlaylist from './cpns/simi-playlist'
import ZDSimiSong from './cpns/simi-song'
import {
  changeCurrentSongLyricAction,
  changeCurrentSongAction,
  changeSimiPlaylistAction,
  changeSimiSongAction
} from './store/actionCreator'

import {SongLeft, SongRight, SongWrapper} from './style'

export default memo(function ZDSong() {
  const dispatch = useDispatch()
  const routerInfo = useLocation()


  useEffect(() => {
    document.documentElement.scrollTop = 0
  }, [])
  //监听路由，根据歌曲id来更新信息
  useEffect(()=> {
    const id = parseInt(url.parse(routerInfo.search , true).query.id)
    if(!id) return ;
    dispatch(changeCurrentSongLyricAction(id))
    dispatch(changeCurrentSongAction(id))
    dispatch(changeSimiPlaylistAction(id))
    dispatch(changeSimiSongAction(id))
  }, [dispatch, routerInfo])

  return (
    <SongWrapper>
      <div className="content wrap-v2">
        <SongLeft>
          <ZDSongInfo />
          <h2>SongContent</h2>
        </SongLeft>
        <SongRight>
          <ZDSimiPlaylist />
          <ZDSimiSong />
          <h2>Download</h2>
        </SongRight>
      </div>
    </SongWrapper>
  )
})
