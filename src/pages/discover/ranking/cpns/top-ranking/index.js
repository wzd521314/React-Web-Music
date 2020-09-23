import React, { memo, useEffect } from 'react'
import classNames from "classnames";
import {useDispatch, useSelector, shallowEqual} from 'react-redux'
import {TopRankingWrapper} from './style'
import { getSizeImage } from "@/utils/format-utils";
import {useHistory} from 'react-router-dom'

import {changeCurrentToplistIndex} from  '../../store/actionCreator'



export default memo(function ZDTopRanking(props) {
  const {currentId} = props
  const history = useHistory()
  const dispatch = useDispatch()
  const {rankingToplist , currentToplistIndex} = useSelector(state => ({
    rankingToplist: state.rankingInfo.get("rankingToplist"),
    currentToplistIndex: state.rankingInfo.get("currentToplistIndex")
  }) ,shallowEqual)

  const handleItemClick = (index, id) => {
    dispatch(changeCurrentToplistIndex(index))
    history.push(`/discover/ranking?id=${id}`)
  }
  console.log();
  
  return (
    <TopRankingWrapper>
      {
        rankingToplist.map((item , index) => {
          let header;
          if (index === 0 || index === 4) {
            header = <div className="header">{index === 0 ? "云音乐特色榜" : "全球媒体榜"}</div>
          }
          return (
            <div key={item.id}>
              {header}
              <div className={classNames("item", { "active": item.id === currentId })}
                onClick={e => handleItemClick(index , item.id)}>
                <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="update">{item.updateFrequency}</div>
                </div>
              </div>
            </div>
          )

        })
      }
    </TopRankingWrapper>
  )
})
