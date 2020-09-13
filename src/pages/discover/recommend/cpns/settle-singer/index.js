import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import {changeSettleSingerAction} from '../../store/actionCreators'

import {getSizeImage} from '@/utils/format-utils'

import ZDThemeHeaderSmall from '@/components/theme-header-small';

import {SettleSingerWrapper} from './style'

export default memo(function ZDSettleSinger() {
  // redux
  const dispatch = useDispatch();
  const {settleSingerList} = useSelector((state) => ({
    settleSingerList: state.recommendInfo.get("settleSingerList")
  }), shallowEqual);

  // hooks
  useEffect(() => {
    dispatch(changeSettleSingerAction(5, -1 , 8));
  }, [dispatch])
  return (
    <SettleSingerWrapper>
      <ZDThemeHeaderSmall title="入驻歌手" more="查看全部>" />
      <div className="singer-list">
        {
          settleSingerList.map((item , index) => {
            return (
              <a href="/todo" key={item.id} className="item">
                <img src={getSizeImage(item.img1v1Url, 62)} alt="" />
                <div className="info">
                  <div className="title">{item.alias.join("") || item.name}</div>
                  <div className="name">{item.name}</div>
                </div>
              </a>
            )
          })
        }
      </div>
      <div className="apply-for">
        <a href="/abc">申请成为网易音乐人</a>
      </div>
    </SettleSingerWrapper>
  )
})
