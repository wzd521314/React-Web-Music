import React, { useRef, memo } from 'react';
import { useSelector,  shallowEqual } from 'react-redux';
import {NavLink} from 'react-router-dom'
import classnames from 'classnames';
import { Carousel } from 'antd';

import {CategoryWrapper, CategoryContent, CategoryItemImage} from './style'


const PAGE_SIZE = 16;



export default memo(function ZDRadioCategory() {
  //获取当前的分类列表
  const {categories, currentId} = useSelector(state => ({
    categories: state.djradioInfo.get("categoryList"),
    currentId: state.djradioInfo.get("currentCategoryId")
  }), shallowEqual);

  const carouselRef = useRef();

  //判断需要分为多少页
  const page = Math.ceil(categories.length / PAGE_SIZE) || 1;

  function getSize(index) {
    return index * PAGE_SIZE > categories.length ? index * PAGE_SIZE : categories.length;
  }



  return (
    <CategoryWrapper>
      <div className="arrow arrow-left" onClick={e => carouselRef.current.prev()}></div>
      <CategoryContent>
        <Carousel dots={{className: "dots"}} ref={carouselRef}>
          {
            Array(page).fill(0).map((_, index) => {
              return (
                <div key={index} className="category-page">
                  {
                    categories.slice(index * PAGE_SIZE, getSize(index + 1)).map((item, indey) => {
                      return (
                        <NavLink to={{
                          pathname: "/discover/djradio/category",
                          search: `?id=${item.id}`
                        }} key={item.id} 
                            className={classnames("category-item", {"active1": currentId === item.id})}
                             >
                          <CategoryItemImage className="image" imgUrl={item.picWebUrl}></CategoryItemImage>
                          <span>{item.name}</span>
                        </NavLink>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </Carousel>
      </CategoryContent>
      <div className="arrow arrow-right" onClick={e => carouselRef.current.next()}></div>
    </CategoryWrapper>
  )
})
