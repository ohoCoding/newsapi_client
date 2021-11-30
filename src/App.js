import React, {useState} from 'react';
import axios from 'axios';

const App = () =>{
  const [data, setData ] = useState(null);
  const onClick = async() => {
    try{
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=047a11a1c79d4199870c500a1d6e7625',
      );
     setData(response.data);
    }catch(e){
      console.log(e);
    }
  };
  return(
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows ={10} value ={JSON.stringify(data,null,2)} />}
    </div>
  );
};

export default App;
