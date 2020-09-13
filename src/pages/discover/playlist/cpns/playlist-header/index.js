import React, {memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import ZDPlaylistCategory from '../playlist-category'

import {HeaderWrapper, HeaderLeft, HeaderRight} from './style'

export default memo(function ZDPlaylistHeader(props) {
  const {isShowCategories, setIsShowCategories} = props

  const { currentCategory } = useSelector(state => ({
    currentCategory: state.playlistInfo.get("currentCategories")
  }), shallowEqual);

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <span className="title">{currentCategory}</span>
        <button className="select" onClick={e => setIsShowCategories(!isShowCategories)}>
          <span>选择分类</span>
          <i className="sprite_icon2"></i>
        </button>
        {isShowCategories ? <ZDPlaylistCategory/> : null}
      </HeaderLeft>
      <HeaderRight>

      </HeaderRight>
    </HeaderWrapper>
  )
})
