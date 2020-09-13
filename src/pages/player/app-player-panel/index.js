import React, { memo } from 'react'
import {PanelWrapper} from './style'

import ZDLyricPanel from '@/pages/player/app-player-panel/cpns/lyric-panel'
import ZDPlayerHeader from '@/pages/player/app-player-panel/cpns/player-header'
import ZDPlayList from '@/pages/player/app-player-panel/cpns/playlist'


export default memo(function ZDAppPlayerPanel(props) {
  
  return (
    <PanelWrapper height1={props.height1}>
      <ZDPlayerHeader/>
      <div className="main">
        <img className="image" src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg" alt=""/>
        <ZDPlayList></ZDPlayList>
        <ZDLyricPanel></ZDLyricPanel>
      </div>
    </PanelWrapper>
  )
})
