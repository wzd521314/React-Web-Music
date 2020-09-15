import {getHotArtist, getArtistList} from '@/services/artist.js'

import {CURRENT_AREA, CURRENT_TYPE, CURRENT_INITIAL, CURRENT_ARTIST_LIST, CURRENT_TYPE_NAME} from './constants'


const artistListAction = (currentArtistList) => ({
  type: CURRENT_ARTIST_LIST,
  currentArtistList
})


export const changeArtistListAction = (type, area , initial) => {
  return (dispatch) => {
    getArtistList(type, area , initial).then(res => {
      dispatch(artistListAction(res.data.artists))
    })
  }
}

export const changeHotListAction = () => {
  return (dispatch) => {
    getHotArtist().then(res => {
      dispatch(artistListAction(res.data.artists))
    })
  }
}



export const changeAreaAction = (currentArtistArea) => ({
  type: CURRENT_AREA,
  currentArtistArea
})

export const changeTypeAction = (currentArtistType) => ({
  type: CURRENT_TYPE,
  currentArtistType
})

export const changeInitialAction = (currentArtistInitial) => ({
  type: CURRENT_INITIAL,
  currentArtistInitial
})

export const changeTypeNameAction = (currentArtistTypeName) => ({
  type: CURRENT_TYPE_NAME,
  currentArtistTypeName
})

