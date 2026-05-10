
import React from "react";
import './../styles/App.css';
import Spinner from "./Spinner";
import { useEffect } from "react";
import { useState } from "react";
import {useSelector,useDispatch} from 'react-redux';
import { handleData } from "./slice/DataSlice";


const App = () => {
  const API_URL='https://jsonplaceholder.typicode.com/posts';
  const [loading,setLoading]=useState(false);
  const datas=useSelector((state)=>state.apiData.data);
  const dispatch=useDispatch();
  console.log(datas);

  function fetchData(){
    setLoading(true);

   fetch(API_URL)
   .then((res)=>res.json())
   .then((res)=>{
    dispatch(handleData(res))
    setLoading(false);
   })
   .catch((err)=>{
    console.log(err);
    setLoading(false);
   })
    
  }

  useEffect(()=>{
    fetchData();
    
  },[])
  
  return (
    <div>
            {loading ? (<Spinner/>):(datas.length>0 ? (
              <div>
                <h1>
        A short Naration of Lorem Ipsum
      </h1>
      <h4>Below Contains A title and Body gotten froma random API, Please take your time to Review</h4>

              <ul>
           { 
        datas.map((el)=>(
          <li key={el.id}>
            <p className="title"><b>Title :</b>{el.title}</p>
            <p className="body"><b>Body :</b>{el.body}</p>
          </li>
        ))
       }
       </ul>
              </div>
       
      ):(
        <div>No Data Found</div>
      ))}
       
    </div>
  )
}

export default App
