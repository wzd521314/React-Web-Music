import React, { memo } from 'react'

import {SongLeft, SongRight, SongWrapper} from './style'

export default memo(function ZDSong() {
  return (
    <SongWrapper>
      <div className="content wrap-v2">
        <SongLeft>
          <h2>PlayerInfo</h2>
          <h2>SongContent</h2>
        </SongLeft>
        <SongRight>
          <h2>SimiPlaylist</h2>
          <h2>SimiSongs</h2>
          <h2>Download</h2>
        </SongRight>
      </div>
    </SongWrapper>
  )
})
