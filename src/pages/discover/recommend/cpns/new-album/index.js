import React, { memo, useEffect, useRef} from 'react'
import {useDispatch, useSelector, shallowEqual} from 'react-redux'

import {Carousel} from 'antd'
import ZDThemeHeaderRCM from '@/components/theme-header-rcm'
import ZDAlbumCover from '@/components/album-cover'

import {getNewAlbumAction} from '@/pages/discover/recommend/store/actionCreators'

import {AlbumWrapper} from './style'

export default memo(function ZDNewAlbum() {

  const dispatch = useDispatch()
  const pageRef = useRef() 
  useEffect(() => {
    dispatch(getNewAlbumAction(10))
  }, [dispatch])

  
  const {newAlbum} = useSelector(state => {
    
    return {
      newAlbum: state.recommendInfo.get("newAlbums")
    }
  }, shallowEqual)


  


  return (
    <AlbumWrapper>
      <ZDThemeHeaderRCM title="新碟上架" url="/discover/album"></ZDThemeHeaderRCM>
      <div className="content">
        <button className="arrow-left arrow sprite_02" onClick={e => pageRef.current.prev()}></button>
        <div className="album">
          <Carousel dot={false} ref={pageRef}>
            {
              [0, 1].map((item, index) => {
                return (
                  <div key={item} className="page">
                    {
                      newAlbum.slice(item*5, (item+1)*5).map((iten, index) => {
                      return <ZDAlbumCover key={iten.id} info={iten} >{iten.name}</ZDAlbumCover>
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className="arrow-right arrow sprite_02" onClick={e => pageRef.current.next()}></button>
      </div>
    </AlbumWrapper>
  )
})
