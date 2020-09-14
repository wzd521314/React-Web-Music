import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {changeTopListAction} from '../../store/actionCreator'

import ZDAlbumCover from '@/components/album-cover';
import ZDThemHeaderNormal from '@/components/theme-header-normal';

import {HotAlbumWrapper} from './style'

export default memo(function ZDHotAlbum() {
  const dispatch = useDispatch()
  const {hotAlbum} = useSelector(state => ({
    hotAlbum: state.albumInfo.get("topList")
  }) ,shallowEqual)

  useEffect(() => {
    dispatch(changeTopListAction())
  }, [dispatch])
  return (
    <HotAlbumWrapper>
      <ZDThemHeaderNormal title="热门新碟" />
      <div className="album-list">
        {
          hotAlbum.slice(0, 10).map((item, index) => {
            
            return <ZDAlbumCover size={"130px"} 
                                 width={"153px"} 
                                 bgp={"-845px"}
                                 key={item.id} 
                                 info={item}/>
          })
        }
      </div>
    </HotAlbumWrapper>
  )
})
