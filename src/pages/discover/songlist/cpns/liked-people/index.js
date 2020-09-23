import React, { memo } from 'react'
import {useSelector, shallowEqual} from 'react-redux'

import ZDThemeHeaderPlayer from '@/components/theme-header-player';
import {getSizeImage1} from '@/utils/format-utils'

import {LikedPeopleWrapper}  from './style'

export default memo(function ZDLikedPeople() {
  const {subscribers} = useSelector(state => ({
    subscribers: state.songlistInfo.get("songlist").subscribers
  }) ,shallowEqual)
  


  return (
    <LikedPeopleWrapper>
      <ZDThemeHeaderPlayer title="喜欢这个歌单的人"/>
      <div className="img-group">
        {
          (subscribers || []).map((item , index) => {
            return (
              <div  key={index} className="img-item"><img  src={getSizeImage1(item.avatarUrl ,40)} alt="" /></div>
            )
          })
        }
      </div>

    </LikedPeopleWrapper>
  )
})
