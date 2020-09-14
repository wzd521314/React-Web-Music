import React, { memo, useEffect, useState , useRef} from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import ZDThemeHeaderNormal from "@/components/theme-header-normal";
import ZDAlbumCover from "@/components/album-cover";
import ZDPagination from '@/components/pagination';
import url from 'url'
import {useLocation} from 'react-router-dom'
import {changeNewestListAction, changeCurrentArea} from '../../store/actionCreator'

import {TopAlbumWrapper} from './style'
export default memo(function ZDTopAlbum() {
  const [currentPage, setCurrentPage] = useState(1);
  const contentRef = useRef()

  const {topList , currentArea} = useSelector(state => ({
    topList: state.albumInfo.get("newestList"),
    currentArea: state.albumInfo.get("currentArea")
  }) ,shallowEqual)
  const dispatch = useDispatch()
  const routerInfo = useLocation()



  useEffect(() => {
    const currentArea = url.parse(routerInfo.search , true).query.area
    setCurrentPage(1)
    if(currentArea) {
      dispatch(changeCurrentArea(currentArea))
      dispatch(changeNewestListAction(currentArea, 0))
    }else {
      dispatch(changeCurrentArea("ALL"))
      dispatch(changeNewestListAction("ALL", 0))
    }
  }, [routerInfo,dispatch])


  const onPageChange = (page, pageSize) => {
    setCurrentPage(page);
    dispatch(changeNewestListAction(currentArea, (page - 1)*35)).then(res => {
      document.documentElement.scrollTop = contentRef.current.offsetTop
    });
  }

  return (
    <TopAlbumWrapper ref={contentRef}>
      <ZDThemeHeaderNormal title="全部新碟" keywords={[['全部','area','ALL', '/discover/album'], ['华语','area','ZH', '/discover/album'],['欧美','area','EA', '/discover/album'],['韩国','area','KR', '/discover/album'],['日本','area','JP', '/discover/album']]}/>
      <div className="album-list">
        {
          topList.map((item, index) => {
            return <ZDAlbumCover size={"130px"} 
                                 width={"153px"} 
                                 bgp={"-845px"}
                                 key={item.id} 
                                 info={item}/>
          })
        }
      </div>
      <ZDPagination currentPage={currentPage} 
                    total={1000} 
                    pageSize={30}
                    onPageChange={onPageChange}/>
    </TopAlbumWrapper>
  )
})
