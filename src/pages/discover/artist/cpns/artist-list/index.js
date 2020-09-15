import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';



import ZDThemeHeaderNormal from '@/components/theme-header-normal';
import ZDAlphaList from './cpns/alpha-list';
import ZDArtistItem from './cpns/artist-item';

import {ArtistListWrapper} from './style'

export default memo(function ZDArtistList() {
  const { currentType, artistList, currentTypeName } = useSelector(state => ({
    currentType: state.artistInfo.get("currentArtistType"),
    artistList: state.artistInfo.get("currentArtistList"),
    currentTypeName: state.artistInfo.get("currentArtistTypeName")
  }), shallowEqual);


  return (
    <ArtistListWrapper>
      <ZDThemeHeaderNormal title={currentTypeName} />
      <ZDAlphaList/>
      <div className="artist-list">
        {
          artistList.slice(0, 10).map((item, index) => {
            return (
              <ZDArtistItem key={item.id} index={index} info={item} isShowImg = {true}/>
            )  
          })
        }
        <div className="line"/>
        {
          artistList.slice(10, 100).map((item, index) => {
            return (
              <ZDArtistItem key={item.id} index={index} info={item}/>
            )  
          })
        }
      </div>
    </ArtistListWrapper>
  )
})
