import React from "react";
import styled,{css} from "styled-components";
import { NavLink } from "react-router-dom";

const categories = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "business",
    text: "비즈니스",
  },
  {
    name: "entertainment",
    text: "엔터테인먼트",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "science",
    text: "과학",
  },
  {
    name: "sports",
    text: "스포츠",
  },
  {
    name: "technology",
    text: "기술",
  },
];

const Categories = () => {
   return (
      <CategoriesBlock>
        {categories.map(c => (
          <Category 
          key={c.name}
          activeClassName = "active"
          exact ={ c.name === 'all' }
          to = {c.name === 'all' ? '/' : `/${c.name}`}
          >
            {c.text}
          </Category>
        ))}

      </CategoriesBlock>
   );
 };

 const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px){
      width: 100%;
      overflow-x: auto;
    }
 `;

 const Category = styled(NavLink)`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;

    &:hover {
      color: blue;
    }
    &.active {
      font-weight: 600,
      border-bottom: 5px bold #27a53c;
      color: #27a53c;
      &:hover{
        color: #3bc9db;
       }
     }
    &+& {
      margin-left: 1rem;
    }
 `;

 export default Categories;