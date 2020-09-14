import {getRadioCategoryList,getRadioRecommend, getRadioRankingList} from '@/services/djradio.js'
import {DJRADIO_CATEGORY_LIST, DJRADIO_CURRENT_CATEGORY_ID, DJRADIO_RECOMMEND, DJRADIO_RANKING_LIST} from './constants'


const radioCategoryListAction = (categoryList) => ({
  type:DJRADIO_CATEGORY_LIST,
  categoryList
})

const radioCurrentCategoryRecommend = (list) => ({
  type: DJRADIO_RECOMMEND,
  currentCategoryRecommend: list
})

const radioCurrentCategoryRanking = (list) => ({
  type: DJRADIO_RANKING_LIST,
  currentCategoryRankingList: list
})

export const changeCurrentRadioCategoryRecommendAction = (typeId) => {
  return async (dispatch) => {
    if(typeId === -1) {
      dispatch(radioCurrentCategoryRecommend([]))
    }else {
      await getRadioRecommend(typeId).then(res => {
        const recommendList = res.data.djRadios.splice(0, 5)
        dispatch(radioCurrentCategoryRecommend(recommendList))
      })

      return Promise.resolve()
    }
  }
}

export const changeCurrentRadioCategoryRankingAction = (typeId, offset) => {
  return async (dispatch) => {
    if(typeId === -1) {
      dispatch(radioCurrentCategoryRanking([]))
    }else{
      await getRadioRankingList(typeId, offset).then(res => {
        dispatch(radioCurrentCategoryRanking(res.data.djRadios))
      })

      return Promise.resolve()
    }
  }
}




export const changeCurrentCategoryId = (id) => ({
  type: DJRADIO_CURRENT_CATEGORY_ID,
  currentCategoryId: id
})


export const changeRadioCategoryListAction = () => {
  return (dispatch) => {
    getRadioCategoryList().then(res => {
      dispatch(radioCategoryListAction(res.data.categories))
    })
  }
}