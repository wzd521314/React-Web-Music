import React, { useEffect, memo } from 'react';
import { useDispatch } from "react-redux";

import {RankingWrapper, RankingLeft, RankingRight} from './style'

import ZDRankingHeader from './cpns/ranking-header'
import ZDRankingList from './cpns/ranking-list'
import ZDTopRanking from './cpns/top-ranking'


import {changeTopListAction} from './store/actionCreator'


export default memo(function ZDRanking() {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(changeTopListAction())
  }, [dispatch])



  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <ZDTopRanking />
      </RankingLeft>
      <RankingRight>
        <ZDRankingHeader />
        <ZDRankingList />
      </RankingRight>
    </RankingWrapper>
  )
})
