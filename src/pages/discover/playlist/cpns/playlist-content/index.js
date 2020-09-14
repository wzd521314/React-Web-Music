import React, { memo } from 'react';
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import {changeCurrentCategoryPlaylist} from "../../store/actionCreator"

import ZDPagination from '@/components/pagination'
import ZDThemeCover from '@/components/theme-cover'


import {SongListWrapper} from './style'

export default memo(function ZDPlaylistContent(props) {
  const {currentPage , setCurrentPage} = props
  const dispatch = useDispatch();
  

  const {currentSongLists} = useSelector(state => ({
    currentSongLists: state.playlistInfo.get("currentSongLists")
  }), shallowEqual)

  const songList = currentSongLists.playlists || [];
  const total = currentSongLists.total || 0;

  const onPageChange = page => {
    
    setCurrentPage(page);
    dispatch(changeCurrentCategoryPlaylist((page - 1) * 35)).then(res => {
      //异步dispatch数据完成后回到页面顶部
      document.documentElement.scrollTop = 0
    })
    
  }

  return (
    <SongListWrapper>
      <div className="songs-list">
        {
          songList.map((item,index) => {
            return (
              <ZDThemeCover info={item} key={item.id} right="30px"/>
            )
          })
        }
      </div>
      <ZDPagination currentPage={currentPage}  total={total} pageSize={35} onPageChange={onPageChange}/>
    </SongListWrapper>
  )
})
