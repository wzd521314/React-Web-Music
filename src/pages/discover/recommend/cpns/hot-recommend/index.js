import React, { memo, useEffect} from 'react'
import {useDispatch, useSelector, shallowEqual} from 'react-redux'


import {HotRecommendWrapper} from './style'

import ZDThemeHeaderRCM from '@/components/theme-header-rcm'
import ZDSonsCover from '@/components/songs-cover'

import {getHotRecommendAction} from '@/pages/discover/recommend/store/actionCreators'

export default memo(function ZDHotRecommend() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getHotRecommendAction(8))
  }, [dispatch])

  const {hotRecommends} = useSelector(state => ({
    hotRecommends: state.recommendInfo.get("hotRecommend")
  }), shallowEqual)



  
  return (
    <HotRecommendWrapper>
      <ZDThemeHeaderRCM title="热门推荐" keywords={["华语","流行","民谣","摇滚","电子",]}></ZDThemeHeaderRCM>
      <div className="recommend-list">
        {hotRecommends.map((item, index) => {
          return <ZDSonsCover key={item.id} info={item}></ZDSonsCover>
        })}
      </div>
    </HotRecommendWrapper>
  )
})
