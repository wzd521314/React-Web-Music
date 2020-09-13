import React, { memo } from 'react'

import {FriendWrapper} from './style'
export default memo(function ZDFriend() {
  return (
    <FriendWrapper>
      <div className="content wrap-v2">
        <div className="pic">
          <a className="login" href="/todo">立即登录</a>
        </div>
      </div>
    </FriendWrapper>
  )
})
