import React, { useEffect, memo , useState } from 'react';
import { useDispatch} from "react-redux";
import { useLocation} from 'react-router-dom';
import {changeCategoriesAction, changeCurrentCategoryPlaylist, changeCurrentCategoriesAction} from './store/actionCreator'

import url from 'url'

import ZDPlaylistHeader from './cpns/playlist-header'
import ZDPlaylistContent from './cpns/playlist-content'

import {SongsWrapper} from './style'
export default memo(function ZDPlaylist() {

  const dispatch = useDispatch()
  const routerInfo = useLocation()
  const [currentPage, setCurrentPage] = useState(1);
  const [isShowCategories, setIsShowCategories] = useState(false)

  //第一次加载时先过去总的分类列表
  useEffect(() => {
    dispatch(changeCategoriesAction())
  } , [dispatch])

  // //当router发生改变时，如果是第一次进入则正常操作，如果不是第一次则说明是在页内点击了分类产生的跳转，可以在url改变后刷新一次页面
  // useEffect(() => {
  //   if(!initial) {
  //     setInitial(true)
  //   }else {
  //     history.go(0)
  //   }
  // }, [routerInfo])

  //根据路由参数来更新页面的数据
  useEffect(() => {
    console.log(33);
    
    const cat = url.parse(routerInfo.search , true).query.cat
    //无论变成什么路由，分页的页码都得重置为1,分类栏都得关闭
    setCurrentPage(1)
    setIsShowCategories(false)
    if(cat) {
      dispatch(changeCurrentCategoriesAction(cat))
      console.log(cat);
      
      dispatch(changeCurrentCategoryPlaylist(0)).then(res => {
        document.documentElement.scrollTop = 0
      })

    }else {
      dispatch(changeCurrentCategoriesAction("全部"))
      dispatch(changeCurrentCategoryPlaylist(0))
    }
  }, [dispatch, routerInfo])




  return (
    <SongsWrapper className="wrap-v2">
      <ZDPlaylistHeader isShowCategories={isShowCategories} setIsShowCategories={setIsShowCategories}/>
      <ZDPlaylistContent currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </SongsWrapper>
  )
})
