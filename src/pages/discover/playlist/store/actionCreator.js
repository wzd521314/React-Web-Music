import {PLAYLIST_CATEGORIES, PLAYLIST_CURRENT_CATEGORIES, PLAYLIST_CURRENT_SONG_LISTS} from './constants'

import {getCatList, getCategoryPlaylist} from '@/services/playlist'
import { 
  handleSongsCategory
} from "@/utils/handle-data";

const categoriesAction = categories => ({
  type: PLAYLIST_CATEGORIES,
  categories
})

const categoryPlaylist = currentSongLists => ({
  type: PLAYLIST_CURRENT_SONG_LISTS,
  currentSongLists
})

export function changeCategoriesAction () {
  return dispatch => {
    getCatList().then(res => {
      const categoryData = handleSongsCategory(res.data);
      dispatch(categoriesAction(categoryData))
    })
  }
}

export function changeCurrentCategoryPlaylist (offset , orderBy = "hot") {
  return async (dispatch , getState) => {
    //获取当前的分类，再根据分类和页码以及排序依据去获取歌单s
    const category = getState().playlistInfo.get("currentCategories")

    
    //获取数据
    await getCategoryPlaylist(category, offset , orderBy).then(res => {
      dispatch(categoryPlaylist(res.data))
      
    })
    //异步获取数据结束后将resolve状态抛出去，告知页面可以回到顶部了
    return Promise.resolve(1)
  }
}


export function changeCurrentCategoriesAction (currentCategories) {
  return ({
    type: PLAYLIST_CURRENT_CATEGORIES,
    currentCategories
  })
}


