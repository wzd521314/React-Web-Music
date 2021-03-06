import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getSizeImage } from '@/utils/format-utils';
import {NavLink} from 'react-router-dom'

import ZDThemeHeaderPlayer from '@/components/theme-header-player';


import {SimiPlaylistWrapper} from './style'
export default memo(function ZDSimiPlaylist() {
  const { simiPlaylist } = useSelector(state => ({
    simiPlaylist: state.songInfo.get("simiPlaylist")
  }), shallowEqual);

  return (
    <SimiPlaylistWrapper>
      <ZDThemeHeaderPlayer title="包含这首歌的歌单" />
      <div className="songs">
        {
          simiPlaylist.map((item, index) => {
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
