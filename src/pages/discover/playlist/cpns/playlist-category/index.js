import React, { memo} from 'react';
import { useSelector,  shallowEqual } from "react-redux";
import {NavLink} from 'react-router-dom'

import {CategoryWrapper} from './style'

export default memo(function ZDPlaylistCategory(props) {
  const {categories} = useSelector( state => ({
    categories: state.playlistInfo.get("categories")
  }) ,shallowEqual)

  

  return (
    <CategoryWrapper>
      <div className="arrow sprite_icon"></div>
      <div className="all">
        <NavLink to={{
          pathname: '/discover/playlist',
          search: "?cat=全部",
        }} className="link">全部风格</NavLink>
      </div>
      <div className="category">
        {
          categories.map((item, index) => {
            return (
              <dl key={item.name} className={"item" + index}>
                <dt>
                  <i className="icon sprite_icon2"></i>
                  <span>{item.name}</span>
                </dt>
                <dd>
                  {
                    item.subs.map(sItem => {
                      return (
                        <div className="item" key={sItem.name}>
                          <NavLink className="link" to={{
                            pathname: '/discover/playlist',
                            search: `?cat=${sItem.name}`,
                          }} >{sItem.name}</NavLink>
                          <span className="divider">|</span>
                        </div>
                      )
                    })
                  }
                </dd>
              </dl>
            )
          })
        }
      </div>
    </CategoryWrapper>
  )
})
