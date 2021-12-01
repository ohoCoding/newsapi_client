import React, {useCallback, useState} from 'react';
import axios from 'axios';
import NewsList from './component/NewsList';
import NewsList2 from './component/NewsList2';
import Categories from './component/Categories';
const App = () =>{
  const [data, setData ] = useState(null);
  const [category, setCategory ] = useState('all');  //category상태를 useState로 관리 
 
  const onSelect = useCallback( category => setCategory(category),[]);

  const onClick = async() => {
    try{
      const response = await axios.get(  //axios는 현재 가장 많이 사용되고 있는 javascript HTTP client ==> HTTP 요청을 Promise 기반으로 처리 
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=047a11a1c79d4199870c500a1d6e7625',
      );
     setData(response.data);
    }catch(e){
      console.log(e);
    }
  };
  return(
    <>
    <Categories category={category} onSelect={onSelect}/>  
    
      
      <div>
        <button onClick={onClick}>불러오기</button>
        
      </div>
      {data && <textarea rows ={10} value ={JSON.stringify(data,null,2)} />}
      <NewsList/>
      <NewsList2 category={category}/>
   
   </> 
  );
};

export default App;
