import {combineReducers} from 'redux'


import {reducer as recommendReducer} from '@/pages/discover/recommend/store'
import {reducer as playerReducer} from '@/pages/player/store'


const ZDReducers = combineReducers({
  recommendInfo: recommendReducer,
  playerInfo: playerReducer
})

export default ZDReducers