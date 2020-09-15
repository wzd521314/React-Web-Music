import React, { memo, useState, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import classNames from 'classnames';

import {NavLink}  from 'react-router-dom'
import { singerAlphas } from '@/utils/handle-data';


import {AlphaListWrapper} from './style'
export default memo(function ZDAlphaList() {
  const {currentInitial, currentType, currentArea} = useSelector(state => ({
    currentInitial: state.artistInfo.get("currentArtistInitial"),
    currentArea: state.artistInfo.get("currentArtistArea"),
    currentType: state.artistInfo.get("currentArtistType")
  }) ,shallowEqual)

  return (
    <AlphaListWrapper hasTop={true}>
      {
        singerAlphas.map((item, index) => {
          
          const isActive = currentInitial === item;
          let name = item
          if (name === "0") name = "其他";
          if (name === "-1") name = "热门";
          return (
            <div key={item}
                 className={classNames("item", {"active1": isActive})}>
              <NavLink to={`/discover/artist?area=${currentArea}&type=${currentType}&initial=${item}`}>{name.toUpperCase()}</NavLink>
            </div>
          )
        })
      }
    </AlphaListWrapper>
  )
})
