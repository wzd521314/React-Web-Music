import React, { memo } from 'react';
import {  useSelector, shallowEqual } from 'react-redux';
import { getSizeImage } from '@/utils/format-utils';
import {NavLink} from 'react-router-dom'
import ZDThemeHeaderPlayer from '@/components/theme-header-player';


import {SimiPlaylistWrapper} from './style'
export default memo(function ZDRelativeRecommend() {
  const { songlist } = useSelector(state => ({
    songlist: state.songlistInfo.get("recommendSonglist")
  }), shallowEqual);

  return (
    <SimiPlaylistWrapper>
      <ZDThemeHeaderPlayer title="包含这首歌的歌单" />
      <div className="songs">
        {
          songlist.map((item, index) => {
            return (
              <div className="song-item" key={item.id}>
                <NavLink to={`/discover/songlist?id=${item.id}`} className="image" href="/#">
                  <img src={getSizeImage(item.coverImgUrl, 50)} alt="" />
                </NavLink>
                <div className="info text-nowrap">
                  <NavLink to={`/discover/songlist?id=${item.id}`} href="#/" className="name">{item.name}</NavLink>
                  <div className="auchor">
                    by 
                    <a href="#/" className="nickname">{item.creator.nickname}</a>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </SimiPlaylistWrapper>
  )
})

