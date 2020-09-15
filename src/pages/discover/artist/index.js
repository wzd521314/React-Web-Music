import React, { memo , useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { useLocation} from 'react-router-dom';
import url from 'url'

import {changeArtistListAction,changeHotListAction, changeAreaAction, changeTypeAction, changeInitialAction, changeTypeNameAction} from './store/actionCreator'

import {ZDArtistWrapper} from './style'

import ZDArtistCategory from './cpns/artist-category'
import ZDArtistList from './cpns/artist-list'

export default memo(function ZDArtist() {
  const dispatch = useDispatch()
  const routerInfo = useLocation()

  //根据路由参数来更新页面的数据
  useEffect(() => {
    console.log(33);
    
    const type = parseInt(url.parse(routerInfo.search , true).query.type)
    const area = parseInt(url.parse(routerInfo.search , true).query.area)
    const initial = url.parse(routerInfo.search , true).query.initial
    if(type) {
      
      dispatch(changeAreaAction(area))
      dispatch(changeTypeAction(type))
      dispatch(changeInitialAction(initial))
      dispatch(changeArtistListAction( type,area, initial))
    }else {
      
      dispatch(changeAreaAction(-1))
      dispatch(changeTypeAction(-1))
      dispatch(changeInitialAction("-1"))
      dispatch(changeTypeNameAction("推荐歌手"))
      dispatch(changeHotListAction())
    }
     
  }, [dispatch, routerInfo])
  
  
  
  return (
    <ZDArtistWrapper>
      <div className="content wrap-v2">
        <ZDArtistCategory />
        <ZDArtistList />

      </div>
    </ZDArtistWrapper>
  )
})
