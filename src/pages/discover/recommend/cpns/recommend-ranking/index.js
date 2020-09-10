import React, { memo, useEffect } from 'react'
import {useSelector, useDispatch, shallowEqual} from 'react-redux'

import ZDThemeHeaderRCM from '@/components/theme-header-rcm'
import ZDTopRanking from '@/components/top-ranking'
import {RankingWrapper} from './style'

import {getTopListAction} from '@/pages/discover/recommend/store/actionCreators'

export default memo(function ZDRanking() {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getTopListAction(19723756))
    dispatch(getTopListAction(3779629))
    dispatch(getTopListAction(2884035))
  }, [dispatch])

  const {
    upIncreaseRanking,
    newSongRanking,
    originalRanking
  } = useSelector(state => ({
    upIncreaseRanking: state.recommendInfo.get("upRankingInfo"),
    newSongRanking: state.recommendInfo.get("newRankingInfo"),
    originalRanking: state.recommendInfo.get("originalRankingInfo")
  }), shallowEqual)

  


  return (
    <RankingWrapper>
      <ZDThemeHeaderRCM title="榜单"></ZDThemeHeaderRCM>
      <div className="tops">
        <ZDTopRanking info={upIncreaseRanking}></ZDTopRanking>
        <ZDTopRanking info={newSongRanking}></ZDTopRanking>
        <ZDTopRanking info={originalRanking}></ZDTopRanking>
      </div>
    </RankingWrapper>
  )
})