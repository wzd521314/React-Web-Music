import React, { useEffect, memo , useState } from 'react';
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
  const [isLoading, setIsLoading] = useState(false)

  //监听路由，根据歌曲id来更新信息
  useEffect(()=> {
    document.documentElement.scrollTop = 0
    setIsLoading(false)
    const id = parseInt(url.parse(routerInfo.search , true).query.id)
    if(!id) return ;
    Promise.all([dispatch(changeCurrentSongLyricAction(id)), dispatch(changeCurrentSongAction(id)), dispatch(changeSimiPlaylistAction(id)), dispatch(changeSimiSongAction(id))]).then(res => {
      setIsLoading(true)
    })
  }, [dispatch, routerInfo])

  return ( !isLoading ? <div style={{height: '100vh'}}></div> :
    <SongWrapper>
      <div className="content wrap-v2">
        <SongLeft>
          <ZDSongInfo />
        </SongLeft>
        <SongRight>
          <ZDSimiPlaylist />
          <ZDSimiSong />
        </SongRight>
      </div>
    </SongWrapper>
  )
})
