import React, {memo} from 'react';
import {NavLink} from "react-router-dom"
import {
  HeaderWrapper
} from "./style";

export default memo(function ZDThemeHeaderNormal(props) {
  const { title, rightSlot, keywords = [] } = props;

  return (
    <HeaderWrapper>
      <div className="title">{title}</div>
      <div className="keyword">
          {
            
            
            keywords.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <NavLink to={{
                    pathname: item[3],
                    search: `?${item[1]}=${item[2]}`
                  }} >{item[0]}</NavLink>
                  <span className="divider">|</span>
                </div>
              )
            })
          }
        </div>

      <div className="right">
        {rightSlot}
      </div>
    </HeaderWrapper>
  )
})
