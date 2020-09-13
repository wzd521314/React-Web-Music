import React, { memo, useEffect } from 'react'
import classNames from "classnames";

import {useDispatch, useSelector, shallowEqual} from 'react-redux'
import {TopRankingWrapper} from './style'
import { getSizeImage } from "@/utils/format-utils";

import {changePlayListAction , changeCurrentToplistIndex} from  '../../store/actionCreator'



export default memo(function ZDTopRanking() {
  const dispatch = useDispatch()
  const {rankingToplist , currentToplistIndex} = useSelector(state => ({
    rankingToplist: state.rankingInfo.get("rankingToplist"),
    currentToplistIndex: state.rankingInfo.get("currentToplistIndex")
  }) ,shallowEqual)

  useEffect(() => {
    //获取到当前榜单的id
    const id = rankingToplist[currentToplistIndex] && rankingToplist[currentToplistIndex].id
    if(!id) return;
    //通过id获取当前榜单的playlist
    dispatch(changePlayListAction(id))
  }, [dispatch, currentToplistIndex, rankingToplist])

  const handleItemClick = (index) => {
    dispatch(changeCurrentToplistIndex(index))
  }

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
              <div className={classNames("item", { "active": index === currentToplistIndex })}
                onClick={e => handleItemClick(index)}>
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
