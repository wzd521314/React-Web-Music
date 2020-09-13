import React, { memo } from 'react'

import {hotRadios} from '@/common/local-data'

import ZDThemeHeaderSmall from '@/components/theme-header-small';


import {HotRadioWrapper} from './style'

export default memo(function ZDHotRadio() {
  return (
    <HotRadioWrapper>
      <ZDThemeHeaderSmall title="热门主播" />
      <div className="radio-list">
        {
          hotRadios.map((item, index) => {
            return (
              <div className="item" key={item.picUrl}>
                <a href="/todo" className="image">
                  <img src={item.picUrl} alt="" />
                </a>
                <div className="info">
                  <div className="name">
                    <a href="/todo">{item.name}</a>
                    <span className="sprite_icon2 vip"></span>
                  </div>
                  <div className="position text-nowrap">{item.position}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </HotRadioWrapper>
  )
})
