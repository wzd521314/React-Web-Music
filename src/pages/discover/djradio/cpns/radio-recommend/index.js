import React, {  memo } from 'react';
import { useSelector,  shallowEqual } from 'react-redux';
import ZDThemeHeaderNormal from '@/components/theme-header-normal';
import ZDRadioRecommendCover from '@/components/radio-recommend-cover';
import {RecommendWrapper} from './style'
 
export default memo(function ZDRecommend() {
  const {recommendList} = useSelector(state => ({
    recommendList: state.djradioInfo.get("currentCategoryRecommend")
  }) ,shallowEqual)

  
  return (
    <RecommendWrapper>
      <ZDThemeHeaderNormal title="优秀新电台" />
      <div className="radio-list">
        {
          recommendList.map((item) => {
            return (<ZDRadioRecommendCover info={item} key={item.id}/>)
          })
        }
      </div>

    </RecommendWrapper>
  )
})
