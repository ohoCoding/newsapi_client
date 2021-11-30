import React, { useEffect }  from "react";
import styled from 'styled-components';



const NewsItem = ({article}) => {
  useEffect(() => {
    console.log(article);
  })
  const { title , description, url, urlToImage } = article; // article라는 객체를 props로 넘겨 받아 title:제목 , description: 내용, url: 링크 , urlToImage: 뉴스이미지
  return (
    <NewsItemBlock>
      {urlToImage && (
      <div className ="thumbnail">
        <a href={url} target="_blank" rel="noopner noreferrer">
          <img src ={urlToImage} alt="thumbnail"/>
        </a>
      </div>)}
      <div className ="contents">
        <h2>
          <a href={url} target="_blank" rel="noopner noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;

const NewsItemBlock = styled.div`
  display: flex;
  .thumbnail{ 
    margin-right: 1rem;
    img{
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents{
    h2{
      margin: 0;
      a {
        color: black;
      }
    }
    p{
      margin: 0;
      line-height:  1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;
