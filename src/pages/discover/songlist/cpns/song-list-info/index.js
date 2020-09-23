import React, { memo } from 'react'

import {getSizeImage1} from '@/utils/format-utils'
import {NavLink} from 'react-router-dom'
import { useSelector, shallowEqual } from "react-redux";

import { formatYearMonthDay } from "@/utils/format-utils";
import ZDGroupSongOperationBar from '@/components/group-song-operation-bar'


import {SonglistHeaderWrapper} from './style'

export default memo(function ZDSongListInfo() {
  const {songlist} = useSelector(state => ({
    songlist: state.songlistInfo.get("songlist")
  }))

  const tags = songlist.tags || []
  return (
    <SonglistHeaderWrapper>
      <div className="image">
        <img src={getSizeImage1(songlist.coverImgUrl, 200)} alt="" />
        <span className="image_cover">封面</span>
      </div>
      <div className="info">
        <div className="title"><i className="title-icon sprite_icon2"></i>{songlist.name}</div>
        <div className="time">
          <img src={getSizeImage1(songlist.creator && songlist.creator.avatarUrl, 35)} alt=""/>
          <div className="creator">{songlist.creator && songlist.creator.nickname }</div>
          <div className="createTime">{"20"+formatYearMonthDay(songlist.createTime)} 创建</div>
        </div>
        <ZDGroupSongOperationBar favorTitle={`(${songlist.subscribedCount})`}
                            shareTitle={`(${songlist.shareCount})`}
                            downloadTitle="下载"
                            tracks={songlist.tracks}
                            commentTitle={`(${songlist.commentCount})`}/>
        <div className="tag-group">
          标签：
          {
            tags.map((item, index) => {
              return (
                <NavLink key={index} className="sprite_button tag" to={`/discover/playlist?cat=${item}`}><i>{item}</i></NavLink>
              )
            })
          }
        </div>
      </div>
    </SonglistHeaderWrapper>
  )
})