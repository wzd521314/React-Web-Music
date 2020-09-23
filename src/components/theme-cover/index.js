import React, { memo } from 'react'
import {NavLink ,useHistory} from 'react-router-dom'
import {
  getSizeImage,
  getCount
} from "@/utils/format-utils";

import {ThemeCoverWrapper} from './style'

export default memo(function ZDThemeCover(props) {
  const history = useHistory()
  const {info , right} = props
  const itemClick = (id) => {
    history.push(`/discover/songlist?id=${id}`)
  }
  
  return (
    <ThemeCoverWrapper right={right}>
      <div className="cover-top" onClick={e => itemClick(info.id)}>
        <img src={getSizeImage(info.picUrl || info.coverImgUrl, 140)} alt="" />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap" onClick={e => itemClick(info.id)}>
        {info.name}
      </div>
      <div className="cover-source">
        by {info.copywriter || info.creator.nickname}
      </div>
    </ThemeCoverWrapper>
  )
})
