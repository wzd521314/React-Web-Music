import React, { memo } from 'react'



import {MineWrapper} from './style'
export default memo(function ZDMine() {
  return (
    <MineWrapper>
      <div className="content wrap-v2">
        <div className="pic">
          <a className="login" href="/todo">立即登录</a>
        </div>
      </div>
    </MineWrapper>
  )
})
