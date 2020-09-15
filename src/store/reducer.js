import {combineReducers} from 'redux'


import {reducer as recommendReducer} from '@/pages/discover/recommend/store'
import {reducer as rankingReducer} from '@/pages/discover/ranking/store'
import {reducer as playlistReducer} from '@/pages/discover/playlist/store'
import {reducer as djradioReducer} from '@/pages/discover/djradio/store'
import {reducer as artistReducer} from '@/pages/discover/artist/store'
import {reducer as songReducer} from '@/pages/discover/song/store'
import {reducer as albumReducer} from '@/pages/discover/album/store'
import {reducer as playerReducer} from '@/pages/player/store'




const ZDReducers = combineReducers({
  recommendInfo: recommendReducer,
  playerInfo: playerReducer,
  rankingInfo: rankingReducer,
  playlistInfo: playlistReducer,
  djradioInfo: djradioReducer,
  albumInfo: albumReducer,
  artistInfo: artistReducer,
  songInfo: songReducer
})

export default ZDReducers