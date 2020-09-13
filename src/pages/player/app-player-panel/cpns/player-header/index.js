import React, { memo } from 'react'
import {useSelector, shallowEqual} from 'react-redux'
import {HeaderLeft, HeaderRight, HeaderWrapper} from './style'

export default memo(function ZDPlayerHeader() {

  const {currentSong, playList} = useSelector(state => ({
    currentSong: state.playerInfo.get("currentSong"),
    playList: state.playerInfo.get("playList")
  }) ,shallowEqual)

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <h3>播放列表({playList.length})</h3>
        <div className="operator">
          <button>
            <i className="sprite_playlist icon favor"></i>
            收藏全部
          </button>
          <button>
            <i className="sprite_playlist icon remove"></i>
            清除
          </button>
        </div>
      </HeaderLeft>
      <HeaderRight>
        {currentSong.name}
      </HeaderRight>
    </HeaderWrapper>
  )
})
