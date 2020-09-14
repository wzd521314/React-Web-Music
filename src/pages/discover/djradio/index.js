import React, { memo, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {DjRadioWrapper} from './style'
import {renderRoutes} from "react-router-config"
import ZDRadioCategory from './cpns/radio-category'
import {changeRadioCategoryListAction} from './store/actionCreator'

export default memo(function ZDDjradio(props) {

  const dispatch = useDispatch()

  //首先获取到分类列表
  useEffect(()=> {
    
    dispatch(changeRadioCategoryListAction())

  }, [dispatch])



  return (
    <DjRadioWrapper className="wrap-v2">
      <ZDRadioCategory />
      {renderRoutes(props.route.routes)}
    </DjRadioWrapper>
  )
})
