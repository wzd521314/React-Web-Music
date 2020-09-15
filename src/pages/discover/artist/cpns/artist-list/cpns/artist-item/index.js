import React, { memo } from 'react'

import { getSizeImage } from '@/utils/format-utils';

import {ItemWrapper} from './style'

export default memo(function ZDArtistItem(props) {
  const { info, index , isShowImg = false } = props;
  return (
    <ItemWrapper>
      {
        index < 10 && isShowImg && (
          <div className="image">
            <img src={getSizeImage(info.img1v1Url, 130)} alt="" />
          </div>
        )
      }
      
      <div className="info">
        <span className="name">{info.name}</span>
        <i className="sprite_icon2 icon"></i>
      </div>
    </ItemWrapper>

    
  )
})
