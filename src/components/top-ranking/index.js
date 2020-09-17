import React, { memo } from 'react'
import {useDispatch} from 'react-redux'
import {getSizeImage} from '@/utils/format-utils'
import {NavLink} from 'react-router-dom'
import {getSongDetailAction , addSongAction, addGroupSongAction} from "@/pages/player/store"
import {TopRankingWrapper} from './style'

export default memo(function ZDTopRanking(props) {
  const {info} = props
  const {tracks = []} = info

  //redux-hook
  const dispatch = useDispatch()

  const playMusic = (item) => {
    
    dispatch(getSongDetailAction(item.id))

  }

  const addMusic = (item) => {
    dispatch(addSongAction(item.id))
  }

  const addGroupMusic = (tracks) => {
    dispatch(addGroupSongAction(tracks))
  }
  const playGroupMusic = (tracks) => {
    dispatch(addGroupSongAction(tracks))
    dispatch(getSongDetailAction(tracks[0].id))
  }

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl)} alt=""/>
          <a href="/todo" className="image_cover">ranking</a>
        </div>
        <div className="info">
          <a href="/todo">{info.name}</a>
          <div>
            <button className="btn play sprite_02" onClick={e => playGroupMusic(tracks)}></button>
            <button className="btn favor sprite_02" onClick={e => addGroupMusic(tracks)}></button>
          </div>
        </div>
      </div>
      <div className="list">
        {
          tracks.slice(0, 10).map((item, index) => {
            
            return (
              <div key={item.id} className="list-item">
                <div className="rank">{index+1}</div>
                <div className="info">
                  <NavLink to={`/discover/song?id=${item.id}`} className="name text-nowrap">{item.name}</NavLink>
                  <div className="operate">
                  <button onClick={e => playMusic(item)} className="btn sprite_02 play"></button>
                  <button onClick={e => addMusic(item)}className="btn sprite_icon2 addto"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
                </div>
              </div>
            )
          })
        } 
      </div>
      <div className="footer">
        <a href="/todo">查看全局 &gt;</a>
      </div>
    </TopRankingWrapper>
  )
})
