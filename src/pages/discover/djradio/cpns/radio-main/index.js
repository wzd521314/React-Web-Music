import React, { useEffect, memo } from 'react';
import {  useDispatch,  } from 'react-redux'

import {changeCurrentRadioCategoryRecommendAction, changeCurrentRadioCategoryRankingAction, changeCurrentCategoryId} from '../../store/actionCreator'
export default memo(function ZDRadioMain() {
  const dispatch = useDispatch()

  useEffect(() => {
    //每次进入该界面得把分类电台数据重置，否则再点击另外一个分类会出现上一个分类渲染出来又闪烁回这次分类的内容
    dispatch(changeCurrentCategoryId(-1))
    dispatch(changeCurrentRadioCategoryRecommendAction(-1))
    dispatch(changeCurrentRadioCategoryRankingAction(-1))


  }, [dispatch])
  return (
    <div>
      <h2>我是主页</h2>
    </div>
  )
})
