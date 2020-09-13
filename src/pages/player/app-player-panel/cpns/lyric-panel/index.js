import React, { memo, useRef, useEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux';
import classNames from 'classnames';
import { scrollTo } from "@/utils/ui-helper";

import {PanelWrapper} from './style'

export default memo(function ZDLyricPanel() {

  const {currentSongLyric, currentSongLyricIndex} = useSelector(state => ({
    currentSongLyric: state.playerInfo.get("currentSongLyric"),
    currentSongLyricIndex: state.playerInfo.get("currentSongLyricIndex")
  }) ,shallowEqual)
  
  const panelRef = useRef()
  //当当前歌词发生改变时就调用该函数
  useEffect(() => {
    
    //唱到前四行歌词之前都不用滚动，到了第五行/index=4的时候就要往上滚动一格，保持当前歌词的居中高亮
    if(currentSongLyricIndex > 0 && currentSongLyricIndex < 3) return ;
    //参数1表示需要设置scrollTop的元素，参数2表述需要设置的scrollTop值是多少，参数3表示滚动所需的时间
    scrollTo(panelRef.current, (currentSongLyricIndex - 3) * 32 , 300)
  }, [currentSongLyricIndex])

  return (
    <PanelWrapper ref={panelRef}>
      <div className="lrc-content">
        {
          currentSongLyric.map((item, index) => {
            return (
              <div key={item.time} className={classNames("lrc-item", {"active": index === currentSongLyricIndex})}>
                {item.content}
              </div>
            )
          })
        }
      </div>
    </PanelWrapper>
  )
})
