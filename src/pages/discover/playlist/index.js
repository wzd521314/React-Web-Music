import React, { useEffect, memo , useState } from 'react';
import { useDispatch} from "react-redux";
import { useLocation} from 'react-router-dom';
import {changeCategoriesAction, changeCurrentCategoryPlaylist, changeCurrentCategoriesAction} from './store/actionCreator'

import url from 'url'

import ZDPlaylistHeader from './cpns/playlist-header'
import ZDPlaylistContent from './cpns/playlist-content'

import {SongsWrapper} from './style'
export default memo(function ZDPlaylist() {
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch()
  const routerInfo = useLocation()
  const [currentPage, setCurrentPage] = useState(1);
  const [isShowCategories, setIsShowCategories] = useState(false)

  //第一次加载时先过去总的分类列表
  useEffect(() => {
    dispatch(changeCategoriesAction())
  } , [dispatch])

  
  
  //根据路由参数来更新页面的数据
  useEffect(() => {
    setIsLoading(false)
    const cat = url.parse(routerInfo.search , true).query.cat
    //无论变成什么路由，分页的页码都得重置为1,分类栏都得关闭
    setCurrentPage(1)
    setIsShowCategories(false)
    if(cat) {
      dispatch(changeCurrentCategoriesAction(cat))
      dispatch(changeCurrentCategoryPlaylist(0)).then(res => {
        document.documentElement.scrollTop = 0
        setIsLoading(true)
      })
    }else {
      dispatch(changeCurrentCategoriesAction("全部"))
      dispatch(changeCurrentCategoryPlaylist(0)).then(res => {
        document.documentElement.scrollTop = 0
        setIsLoading(true)
      })
    }
  }, [dispatch, routerInfo])




  return !isLoading ? <div style={{height: '100vh',}}></div> : (
    <SongsWrapper className="wrap-v2">
      <ZDPlaylistHeader isShowCategories={isShowCategories} setIsShowCategories={setIsShowCategories}/>
      <ZDPlaylistContent currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </SongsWrapper>
  )
})
