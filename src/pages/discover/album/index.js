import React, { memo} from 'react'
import ZDTopAlbum from './cpns/top-album'
import ZDHotAlbum from './cpns/hot-album'



import {AlbumWrapper} from './style'
export default memo(function ZDAlbum() {



  return (
    <AlbumWrapper className="wrap-v2">
      <ZDHotAlbum />
      <ZDTopAlbum />
    </AlbumWrapper>
  )
})
