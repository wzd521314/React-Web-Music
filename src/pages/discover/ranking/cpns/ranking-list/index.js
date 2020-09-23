import React, { memo, useEffect } from 'react';
import {NavLink} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { useSelector, shallowEqual } from "react-redux";
import {getSongDetailAction} from "@/pages/player/store"





import {
  getSizeImage,
  formatMinuteSecond
} from "@/utils/format-utils.js"

import  ZDThemeHeaderSong from '@/components/theme-header-song'

import {RankingListWrapper} from './style'

export default memo(function ZDRankingList() {
  const dispatch = useDispatch()

  const {tracks, playList} = useSelector(state => ({
    tracks: state.rankingInfo.get("playList").tracks,
    playList: state.rankingInfo.get("playList")
  }) , shallowEqual)
  


  const playMusic = id => {
    dispatch(getSongDetailAction(id))
  }
  return (
    <RankingListWrapper>
      <ZDThemeHeaderSong trackCount={playList.trackCount}  playCount={playList.playCount}/>
      <div className="play-list">
        <table>
          <thead>
            <tr className="header">
              <th className="ranking"></th>
              <th className="title">标题</th>
              <th className="duration">时长</th>
              <th className="singer">歌手</th>
            </tr>
          </thead>
          <tbody>
            {
              (tracks || []).map((item, index) => {
                return (
                  <tr className="" key={item.id}>
                    <td>
                      <div className="rank-num">
                        <span className="num">{index + 1}</span>
                        <span className="new sprite_icon2"></span>
                      </div>
                    </td>
                    <td>
                      <div className="song-name">
                        {
                          index < 3 ?
                            (<img src={getSizeImage(item.al.picUrl, 50)} alt="" />) : null
                        }
                        <span className="play sprite_table" onClick={e => playMusic(item.id)}></span>
                        <NavLink to={`/discover/song?id=${item.id}`} className="name">{item.name}</NavLink>
                      </div>
                    </td>
                    <td>{formatMinuteSecond(item.dt)}</td>
                    <td className="artist">{item.ar[0].name}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </RankingListWrapper>
  )
})
