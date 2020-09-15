import React, { memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import classNames from 'classnames';
import {NavLink} from "react-router-dom"
import {artistCategories} from '@/common/local-data'
import {changeTypeNameAction} from '../../store/actionCreator'
import { CategoryWrapper, CategoryItem } from './style';




export default memo(function ZDArtistCategory() {
    // redux hooks
  const dispatch =useDispatch()
  const {currentArea, currentType} = useSelector(state => ({
    currentArea: state.artistInfo.get("currentArtistArea"),
    currentType: state.artistInfo.get("currentArtistType")
  }), shallowEqual);
  
  // render jsx
  const renderArtist = (artists, area) => {
    return (
      <div>
        {
          artists.map((item, index) => {
            const isSelect = currentArea === area && currentType === item.type;
            return (
              <CategoryItem key={item.name} 
                            className={classNames({"active": isSelect})}>
              {area >= 0 ? <NavLink to={{
                  pathname: '/discover/artist',
                  search: `?area=${area}&type=${artists[index].type}&initial=-1`
                }} onClick={e => dispatch(changeTypeNameAction(item.name))}>{item.name}</NavLink> :
                <NavLink to='/discover/artist'>
                  {item.name}
                </NavLink>
              }
              </CategoryItem>
            )
          })
        }
      </div>
    )
  }


  return (
    <CategoryWrapper>
      {
        artistCategories.map((item, index) => {
          return (
            <div className="section" key={item.area}>
              <h2 className="title">{item.title}</h2>
              {renderArtist(item.artists, item.area)}
            </div>
          )
        })
      }
    </CategoryWrapper>
  )
})
