import React, { memo } from 'react'
import {useSelector, shallowEqual, useDispatch} from 'react-redux'
import { deleteAllAction } from '../../../store/actionCreator'
import {HeaderLeft, HeaderRight, HeaderWrapper} from './style'

export default memo(function ZDPlayerHeader() {
  const dispatch = useDispatch()
  const {currentSong, playList} = useSelector(state => ({
    currentSong: state.playerInfo.get("currentSong"),
    playList: state.playerInfo.get("playList")
  }) ,shallowEqual)

  const deleteAll = () => {
    console.log('删除全部歌曲');
    
    dispatch(deleteAllAction())
  }

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <h3>播放列表({playList.length})</h3>
        <div className="operator">
          <button>
            <i className="sprite_playlist icon favor"></i>
            收藏全部
          </button>
          <button onClick={e => deleteAll()}>
            <i className="sprite_playlist icon remove" ></i>
            清除全部
          </button>
        </div>
      </HeaderLeft>
      <HeaderRight>
        {currentSong.name}
      </HeaderRight>
    </HeaderWrapper>
  )
})
