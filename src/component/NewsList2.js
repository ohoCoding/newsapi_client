import React , {useState, useEffect} from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';


const sampleArticle = {
  title:'제목',
  description:'내용',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160',
};

const NewsList2 = () => {
  const [articles , setArticles] = useState(null);
  const [loading , setLoading ]= useState(false);

  useEffect(() => {
    //async를  사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try{
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=kr&apiKey=047a11a1c79d4199870c500a1d6e7625',
        );
       setArticles(response.data.articles);
      }catch(e){
        console.log(e);
      }
      setLoading(false);
    }
    fetchData();
  },[]);

  //대기중일때 
  if(loading){
    return <NewsListBlock> 대기중...</NewsListBlock>
  }
  //아직 articles값이 설정되지 않았을때 
  if(!articles){
    return null;
  }
  //articles 값이 유효할때
  return(
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article}/>
      ))}
    </NewsListBlock>
  );
};

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media-screen and( max-width: 760px){
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export default NewsList2;