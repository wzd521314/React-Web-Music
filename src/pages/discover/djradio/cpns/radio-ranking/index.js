import React, {  memo,  useRef } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import ZDThemeHeaderNormal from '@/components/theme-header-normal';
import ZDRadioRankingCover from '@/components/radio-ranking-cover';
import ZDPagination from '@/components/pagination';
import {changeCurrentRadioCategoryRankingAction} from '../../store/actionCreator'

import {RankingWraper} from './style'
export default memo(function ZDRadioRanking(props) {
  const {currentPage, setCurrentPage} = props
  const contentRef = useRef()
  const dispatch = useDispatch()
  const { currentRanking, currentId } = useSelector(state => ({
    currentRanking: state.djradioInfo.get("currentCategoryRankingList"),
    currentId: state.djradioInfo.get("currentCategoryId")
  }), shallowEqual)

  
  const onPageChange = (page, pageSize) => {
    setCurrentPage(page);
    dispatch(changeCurrentRadioCategoryRankingAction(currentId, (page - 1) * 30)).then(res => {

      document.documentElement.scrollTop = contentRef.current.offsetTop
    });
  }

  return (
    <RankingWraper ref={contentRef}>
      <ZDThemeHeaderNormal title="电台排行榜" />
      <div className="ranking-list">
        {
          currentRanking.map((item, index) => {
            return (<ZDRadioRankingCover key={item.id} radio={item}/>)
          })
        }
      </div>
      <ZDPagination currentPage={currentPage} 
                    total={1000} 
                    pageSize={30}
                    onPageChange={onPageChange}/>
    </RankingWraper>
  )
})
