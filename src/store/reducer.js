import {combineReducers} from 'redux'


import {reducer as recommendReducer} from '@/pages/discover/recommend/store'


const ZDReducers = combineReducers({
  recommendInfo: recommendReducer
})

export default ZDReducers