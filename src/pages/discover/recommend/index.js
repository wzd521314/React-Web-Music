import React, { memo,} from 'react'

import ZDTopBanner  from './cpns/top-banner'
import ZDHotRecommend  from './cpns/hot-recommend'
import ZDNewAlbum from './cpns/new-album'
import ZDRanking from './cpns/recommend-ranking'
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style.js'

export default memo(function ZDRecommend() {
  return (
    <RecommendWrapper>
      <ZDTopBanner></ZDTopBanner>
      <Content className="wrap-v2">
        <RecommendLeft>
          <ZDHotRecommend></ZDHotRecommend>
          <ZDNewAlbum></ZDNewAlbum>
          <ZDRanking></ZDRanking>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  )
})
