import React, { memo } from 'react'
import {useDispatch} from 'react-redux'
import {OperationBarWrapper}  from './style'
import {getSongDetailAction , addGroupSongAction} from "@/pages/player/store"

export default memo(function ZDGroupSongOperationBar(props) {
  const { favorTitle, shareTitle, downloadTitle, commentTitle, tracks } = props;
  const dispatch = useDispatch()

  const addGroupMusic = (tracks) => {
    dispatch(addGroupSongAction(tracks))
  }
  const playGroupMusic = (tracks) => {
    dispatch(addGroupSongAction(tracks))
    dispatch(getSongDetailAction(tracks[0].id))
  }

  return (
    <OperationBarWrapper>
      <span className="play">
        <a href="javascript:;" className="play-icon sprite_button" onClick={e => playGroupMusic(tracks)}>
          <span className="play sprite_button">
            <i className="sprite_button"></i>
            <span>播放</span>
          </span>
        </a>
        <a href="javascript:;" className="add-icon sprite_button" onClick={e => addGroupMusic(tracks)}>+</a>
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
