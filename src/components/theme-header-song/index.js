import React , {memo} from 'react';
import { useSelector, shallowEqual } from "react-redux";

import {HeaderWrapper} from './style'
export default memo(function ZDThemeHeaderSong() {

  const {playList} = useSelector(state => ({
    playList: state.rankingInfo.get("playList")
  }) , shallowEqual)


  return (
    <HeaderWrapper>
      <div className="left">
        <h3 className="title">歌曲列表</h3>
        <div className="count">{playList.trackCount}首歌</div>
      </div>
      <div className="right">
        <span>播放：</span>
        <span className="count">{playList.playCount}</span>
        <span>次</span>
      </div>
    </HeaderWrapper>
  )
})