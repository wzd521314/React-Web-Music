import {combineReducers} from 'redux'


import {reducer as recommendReducer} from '@/pages/discover/recommend/store'
import {reducer as rankingReducer} from '@/pages/discover/ranking/store'
import {reducer as playlistReducer} from '@/pages/discover/playlist/store'

import {reducer as playerReducer} from '@/pages/player/store'



const ZDReducers = combineReducers({
  recommendInfo: recommendReducer,
  playerInfo: playerReducer,
  rankingInfo: rankingReducer,
  playlistInfo: playlistReducer
})

export default ZDReducers