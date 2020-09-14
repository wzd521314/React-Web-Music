import {getNewAlbum, getTopAlbum} from '@/services/album.js'

import {HOT_ALBUM, NEWEST_ALBUM, CURRENT_ALBUM_AREA} from './constants'

const topListAction = (topList) => ({
  type: HOT_ALBUM,
  topList
})

const newestListAction = (newestList) => ({
  type: NEWEST_ALBUM,
  newestList
})


export const changeTopListAction = () => {
  return (dispatch) => {
    getTopAlbum().then(res => {
      dispatch(topListAction(res.data.albums))
    })
  }
}

export const changeNewestListAction = (area, offset) => {
  return async (dispatch) => {
    await getNewAlbum(area, offset).then(res => {
      dispatch(newestListAction(res.data.albums))
    })

    return Promise.resolve()
  }
}

export const changeCurrentArea = (currentArea) => ({
  type: CURRENT_ALBUM_AREA,
  currentArea
})