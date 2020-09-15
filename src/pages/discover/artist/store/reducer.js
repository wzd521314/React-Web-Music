import {Map} from 'immutable'
import {CURRENT_AREA, CURRENT_TYPE, CURRENT_INITIAL, CURRENT_ARTIST_LIST,CURRENT_TYPE_NAME} from './constants'

const defaultState  = Map({
  currentArtistArea: '-1',
  currentArtistType: '-1',
  currentArtistTypeName: '',
  currentArtistInitial: '-1',

  currentArtistList: []
})

export default function (state = defaultState, action) {
  switch (action.type) {
    case CURRENT_AREA:
      return state.set("currentArtistArea", action.currentArtistArea)
    case CURRENT_TYPE:
      return state.set("currentArtistType", action.currentArtistType)
    case CURRENT_INITIAL:
      return state.set("currentArtistInitial", action.currentArtistInitial)
    case CURRENT_ARTIST_LIST:
      return state.set("currentArtistList", action.currentArtistList)
    case CURRENT_TYPE_NAME:
      return state.set("currentArtistTypeName", action.currentArtistTypeName)

    default:
      return state
  }
}