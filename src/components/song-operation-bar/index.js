import React, { memo } from 'react'
import {useDispatch} from 'react-redux'
import {OperationBarWrapper}  from './style'
import {getSongDetailAction , addSongAction} from "@/pages/player/store"

export default memo(function ZDSongOperationBar(props) {
  const { favorTitle, shareTitle, downloadTitle, commentTitle, songId } = props;
  const dispatch = useDispatch()

  const playMusic = (id) => {
    dispatch(getSongDetailAction(id))
  }
  const addMusic = (id) => {
    dispatch(addSongAction(id))
  }

  return (
    <OperationBarWrapper>
      <span className="play">
        <a href="javascript:;" className="play-icon sprite_button" onClick={e => playMusic(songId)}>
          <span className="play sprite_button">
            <i className="sprite_button"></i>
            <span>播放</span>
          </span>
        </a>
        <a href="javascript:;" className="add-icon sprite_button" onClick={e => addMusic(songId)}>+</a>
      </span>
      <a href="/abc" className="item sprite_button">
        <i className="icon favor-icon sprite_button">{favorTitle}</i>
      </a>
      <a href="/abc" className="item sprite_button">
        <i className="icon share-icon sprite_button">{shareTitle}</i>
      </a>
      <a href="/abc" className="item sprite_button">
        <i className="icon download-icon sprite_button">{downloadTitle}</i>
      </a>
      <a href="/abc" className="item sprite_button">
        <i className="icon comment-icon sprite_button">{commentTitle}</i>
      </a>
    </OperationBarWrapper>
  )
})
