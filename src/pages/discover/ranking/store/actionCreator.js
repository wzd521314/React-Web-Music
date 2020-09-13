import {TOP_LIST,  CURRENT_TOP_LIST_INDEX, RANKING_LIST_DETAIL} from './constants'

import {getTopList, getPlayList} from '@/services/ranking'


const topListAction = (toplist) => ({
  type: TOP_LIST,
  toplist
})

const playListAction = (playList) => ({
  type: RANKING_LIST_DETAIL,
  playList
})

export function changeTopListAction () {
  return (dispatch) => {
    getTopList().then(res => {
      dispatch(topListAction(res.data.list))
    })
  }
}

export function changeCurrentToplistIndex (index) {
  return {
    type: CURRENT_TOP_LIST_INDEX,
    index
  }
}


export function changePlayListAction (id) {
  return (dispatch) => {
    getPlayList(id).then(res => {
      dispatch(playListAction(res.data.playlist))
    })
  }
}

