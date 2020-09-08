import React, { memo } from 'react'

import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style.js'
import {headerLinks} from "@/common/local-data"
import { NavLink } from 'react-router-dom'
import {SearchOutlined} from '@ant-design/icons'
import {Input} from "antd"

export default memo(function ZDAppHeader() {
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">aaa</a>
          <div className="select-list">
          {headerLinks.map((item, index) => {
            if(index < 3) {
              return (<div className="select-item" key={index}>
                <NavLink exact to={item.link}>
                {item.title}
                <i className="icon sprite_01"></i>
                </NavLink>
              </div>)
            }else {
              return (<div className="select-item" key={index}>
                <a href={item.link}>{item.title}</a>
              </div>)
            }
          })}        
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined></SearchOutlined>}></Input>
          <div className="center">创作者中心</div>
          <div>登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
