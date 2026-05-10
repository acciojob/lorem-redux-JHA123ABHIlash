
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
       {
        datas.map((el)=>(
          <div key={el.id}>
            <p><b>Title </b>{el.title}</p>
            <p><b>Body </b>{el.body}</p>
          </div>
        ))
       }
    </div>
  )
}

export default App
