import React, { memo } from 'react'
import {NavLink ,useHistory} from 'react-router-dom'

import {SongsCoverWrapper} from './style'

import {getCount, getSizeImage} from '@/utils/format-utils'

export default memo(function ZDSonsCover(props) {
  const {info} = props
  const history = useHistory()
  const itemClick = (id) => {
    history.push(`/discover/songlist?id=${id}`)
  }
  return (
    <SongsCoverWrapper>
      <div className="cover-top" onClick={e => itemClick(info.id)}>
        <img src={getSizeImage(info.picUrl, 140)} alt=""/>
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
      <div className="cover-source text-nowrap">
        by {info.copywriter || info.creator.nickname}
      </div>
    </SongsCoverWrapper>
  )
})
