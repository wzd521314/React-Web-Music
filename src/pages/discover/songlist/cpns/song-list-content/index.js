import React, { memo  } from 'react'
import {useSelector , shallowEqual} from 'react-redux'
import {useDispatch} from 'react-redux'

import  ZDThemeHeaderSong from '@/components/theme-header-song'
import {SongListWrapper} from './style'

import {getSongDetailAction} from "@/pages/player/store"
import {NavLink} from 'react-router-dom'
import {
  getSizeImage,
  formatMinuteSecond
} from "@/utils/format-utils.js"



export default memo(function ZDSongListContent() {
  const dispatch = useDispatch()
  const {tracks, songList} = useSelector(state => ({
    tracks: state.songlistInfo.get("songlist").tracks,
    songList: state.songlistInfo.get("songlist")
  }) , shallowEqual)

  const playMusic = id => {
    dispatch(getSongDetailAction(id))
  }


  return (
    <SongListWrapper>
      <ZDThemeHeaderSong trackCount={songList.trackCount}  playCount={songList.playCount}/>
      <div className="play-list">
        <table>
          <thead>
            <tr className="header">
              <th className="ranking"></th>
              <th className="title">歌曲标题</th>
              <th className="duration">时长</th>
              <th className="singer">歌手</th>
              <th className="singer">歌曲专辑</th>
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
                        <span className="play sprite_table" onClick={e => playMusic(item.id)}></span>
                      </div>
                    </td>
                    <td>
                      <div className="song-name">
                        <NavLink to={`/discover/song?id=${item.id}`} className="name text-nowrap">{item.name}</NavLink>
                      </div>
                    </td>
                    <td>{formatMinuteSecond(item.dt)}</td>
                    <td ><div className="artist text-nowrap">{item.ar[0].name}</div></td>
                    <td className="album text-nowrap"><a href="javascript:;" className="album-name text-nowrap">{item.al.name}</a></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </SongListWrapper>
  )
})