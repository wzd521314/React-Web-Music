import React, { memo, useEffect, useRef, useCallback, useState } from 'react'
import {useDispatch, useSelector, shallowEqual} from 'react-redux'

import {Carousel} from 'antd'
import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style'
import {getTopBannersAction} from '@/pages/discover/recommend/store/actionCreators'


export default memo(function ZDTopBanner() {
  //state
  const [currentIndex, setCurrentIndex] = useState(0)

  //组件和redux关联；获取数据和进行操作
  const dispatch = useDispatch()
  const banners = useSelector(state => state.recommendInfo.get('topBanners') , shallowEqual)
  
  const bannerCarousel = useRef()

  useEffect(() => {
    dispatch(getTopBannersAction())
  }, [dispatch])

  const bannerChange =  useCallback((from, to) => {
    setCurrentIndex(to)
  }, [])

  const bgImage = banners[currentIndex] && banners[currentIndex].imageUrl

  return (
    <BannerWrapper bgImage={bgImage + "?imageView&blur=40x20"}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerCarousel} beforeChange={bannerChange}>
            {
              banners.map((item, index) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img className="image" src={item.imageUrl} alt={item.typeTitle}></img>
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={e => bannerCarousel.current.prev()}></button>
          <button className="btn right" onClick={e => bannerCarousel.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
