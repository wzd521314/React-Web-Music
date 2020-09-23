import React, { useEffect, memo , useState } from 'react';
import { useDispatch } from "react-redux";

import {RankingWrapper, RankingLeft, RankingRight} from './style'

import { useLocation} from 'react-router-dom';
import url from 'url'
import {changePlayListAction} from  './store/actionCreator'


import ZDRankingHeader from './cpns/ranking-header'
import ZDRankingList from './cpns/ranking-list'
import ZDTopRanking from './cpns/top-ranking'


import {changeTopListAction} from './store/actionCreator'


export default memo(function ZDRanking() {
  const [currentId , setCurrentId] = useState(19723756)
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const routerInfo = useLocation()
  
  useEffect(() => {
    dispatch(changeTopListAction())
    document.documentElement.scrollTop = 0
  }, [dispatch])
  let id = parseInt(url.parse(routerInfo.search , true).query.id)

  useEffect(() => {
    setIsLoading(false)
    document.documentElement.scrollTop = 0
    if(id) {
      dispatch(changePlayListAction(id)).then(res => {
        setIsLoading(true)
      })
      setCurrentId(id)
    }else {
      dispatch(changePlayListAction(19723756)).then(res => {
        setIsLoading(true)
      })
    }
  }, [dispatch, routerInfo])


  return  !isLoading ? <div style={{height: '100vh',}}></div> : (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <ZDTopRanking  currentId={currentId}/>
      </RankingLeft>
      <RankingRight>
        <ZDRankingHeader />
        <ZDRankingList />
      </RankingRight>
    </RankingWrapper>
  )
})
