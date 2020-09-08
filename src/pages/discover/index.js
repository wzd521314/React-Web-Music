import React, { memo } from 'react'

import {renderRoutes} from "react-router-config"


import {NavLink} from 'react-router-dom'
import {
  DiscoverWrapper,
  TopMenu
} from './style.js'

import {discoverMenu} from '@/common/local-data'



export default memo(function ZDDiscover(props) {
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {
            discoverMenu.map((item, index) => {
              return (
                <div className="item" key={item.title}>
                  <NavLink to={"/discover" + item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>

      {renderRoutes(props.route.routes)}

    </DiscoverWrapper>

  )
})
