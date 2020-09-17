import React, { memo, useState ,useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { getSizeImage } from '@/utils/format-utils';

import ZDSongOperationBar from '@/components/song-operation-bar';

import {InfoWrapper, InfoRight, InfoLeft} from './style'

export default memo(function ZDSongInfo() {
  const [isSpread, setIsSpread] = useState(false);
  const [isShowSpread , setIsShowSpread] = useState(false)
  const { currentSong, currentLyrics } = useSelector(state => ({
    currentSong: state.songInfo.get("currentSong"),
    currentLyrics: state.songInfo.get("currentSongLyric")
  }), shallowEqual);


  useEffect(() => {
    console.log(currentLyrics.length);
    
    if(currentLyrics.length > 13) {
      setIsShowSpread(true)
    }
  } ,[currentLyrics.length])

  //判断歌词是否达到需要隐藏一部分的长度
  const totalLyricCount = isSpread ? currentLyrics.length : 13;

  const pciUrl = currentSong.al && currentSong.al.picUrl
  const singerName = currentSong.ar && currentSong.ar[0].name
  const listName = currentSong.al && currentSong.al.name

  return (
    <InfoWrapper>
      <InfoLeft>
        <div className="image">
          <img src={getSizeImage(pciUrl, 130)} alt="" />
          <span className="cover image_cover"></span>
        </div>
        <div className="link">
          <i className="sprite_icon2"></i>
          <a href="#/">生成外联播放器</a>
        </div>
      </InfoLeft>
      <InfoRight isSpread={isSpread}>
        <div className="header">
          <i className="sprite_icon2"></i>
          <h3 className="title">{currentSong.name}</h3>
        </div>
        <div className="singer">
          <span className="label">歌手：</span>
          <a href="/#" className="name">{singerName}</a>
        </div>
        <div className="album">
          <span className="label">所属专辑：</span>
          <a href="/#" className="name">{listName}</a>
        </div>

        <ZDSongOperationBar favorTitle="收藏"
                            shareTitle="分享"
                            downloadTitle="下载"
                            commentTitle="(167366)"
                            songId={currentSong.id}/>

        <div className="lyric">
          <div className="lyric-info">
            {
              currentLyrics.slice(0, totalLyricCount).map((item, index) => {
                return <p key={item.time} className="text">{item.content}</p>
              })
            }
          </div>
          {
           isShowSpread &&  <div className="lyric-control"
                                    onClick={e => setIsSpread(!isSpread)}>
                                    {isSpread ? "收起": "展开"}
                                    <span className="sprite_icon2"></span>
                            </div>
          }
          {
            currentLyrics.length === 0 && <span>暂时没有歌词</span>
          }
        </div>
      </InfoRight>
    </InfoWrapper>
  )
})
