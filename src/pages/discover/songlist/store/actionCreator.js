import {SONG_LIST_DETAIL,  RECOMMEND_SONG_LIST} from './constants'

import {getSongListInfo, getRecommendSongList} from '@/services/songlist'



const songListAction = (songlist) => ({
  type: SONG_LIST_DETAIL,
  songlist
})

const recommendSongListAction = (recommendSongList) => ({
  type: RECOMMEND_SONG_LIST,
  recommendSongList
})


export function changeSongListAction (id) {
  return async (dispatch) => {
    await getSongListInfo(id).then(res => {
      dispatch(songListAction(res.data.playlist))
    })

    return Promise.resolve()
  }
}

export function changeRecommendSongListAction (id) {
  return async (dispatch) => {
    await  getRecommendSongList(id).then(res => {
      dispatch(recommendSongListAction(res.data.playlists))
    })

    return Promise.resolve()
  }
}


