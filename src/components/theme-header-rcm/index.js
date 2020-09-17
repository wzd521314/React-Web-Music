import React, { memo } from 'react'
import {NavLink} from 'react-router-dom'
import {HeaderWrapper} from './style'
export default memo(function ZDThemeHeaderRCM(props) {

  const {title, keywords= [] , url = '' , query} = props

  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {
            keywords.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <NavLink to={`${url}${query}${item}`}>{item}</NavLink>
                  <span className="divider">|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <NavLink to={url}>更多</NavLink>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
})
