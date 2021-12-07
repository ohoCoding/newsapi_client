import React from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";
import usePromise from "../lib/usePromise";



const NewsList3 = ({category}) => {
  const [loading, response, error ] = usePromise(() => {
    const query = category === 'all' ? '' :  `&`
  })
}
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