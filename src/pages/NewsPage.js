import React, { useEffect } from 'react';
import Categories from '../component/Categories';
import NewsList2 from '../component/NewsList2';

const NewsPage = ({match})  => {
  //카테고리가 선택되지 않았으면 기본값 all로 사용 
   const category = match.params.category || 'all';
  useEffect(() => {
    console.log(category);
  })
   return (
     <>
      <Categories/>
      <NewsList2 category={category}/>
     </>
   )
}

export default NewsPage;