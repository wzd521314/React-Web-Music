import React, { useEffect, memo , useState } from 'react';

import { useDispatch } from "react-redux";
import { useLocation} from 'react-router-dom';
import url from 'url'

import {changeSongListAction , changeRecommendSongListAction} from './store/actionCreator'


import {SongLeft, SongRight, SongWrapper} from './style'
import  ZDLikedPeople  from './cpns/liked-people'
import  ZDRelativeRecommend  from './cpns/relative-recommend'
import  ZDSongListContent  from './cpns/song-list-content'
import  ZDSongListInfo  from './cpns/song-list-info'
export default memo(function ZDSongList() {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const routerInfo = useLocation()

  useEffect(() => {
    setIsLoading(false)
    const id = parseInt(url.parse(routerInfo.search , true).query.id)
    document.documentElement.scrollTop = 0
    if(id) {
      Promise.all([dispatch(changeSongListAction(id)), dispatch(changeRecommendSongListAction(id))]).then(res => {
        setIsLoading(true)
      })
    }
  }, [dispatch, routerInfo])
  console.log(isLoading);
  
  return !isLoading ? <div style={{height: '100vh',}}></div> : (
    <SongWrapper>
      <div className="content wrap-v2">
        <SongLeft>
          <ZDSongListInfo />
          <ZDSongListContent />
        </SongLeft>
        <SongRight>
          <ZDLikedPeople />
          <ZDRelativeRecommend />
        </SongRight>
      </div>
    </SongWrapper>
  )
})
