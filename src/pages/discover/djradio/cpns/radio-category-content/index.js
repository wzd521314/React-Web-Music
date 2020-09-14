import React, { memo , Fragment, useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import ZDRecommend from '../radio-recommend'
import url from 'url'
import {useLocation} from 'react-router-dom'
import {changeCurrentRadioCategoryRecommendAction, changeCurrentRadioCategoryRankingAction, changeCurrentCategoryId} from '../../store/actionCreator'

import ZDRadioRanking from '../radio-ranking'

export default memo(function ZDRadioCategoryContent() {
  // const {currentId} = useSelector(state => ({
  //   currentId: state.djradioInfo.get("currentCategoryId")
  // }) ,shallowEqual)
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch()
  const routerInfo = useLocation()

  useEffect(() => {
    const currentId = parseInt(url.parse(routerInfo.search , true).query.id)

    console.log(currentId);
    setCurrentPage(1)
    if(currentId) {
      dispatch(changeCurrentCategoryId(currentId))
      dispatch(changeCurrentRadioCategoryRecommendAction(currentId))
      dispatch(changeCurrentRadioCategoryRankingAction(currentId))
    } 
  }, [routerInfo,dispatch])

  return (
    <Fragment>
      <ZDRecommend />
      <ZDRadioRanking currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </Fragment>
  )
})
