import { useState,useEffect } from "react";
//This is a custom hook useful for fetching data from JSON file
const useFetch =(url)=>{
   // console.log(url);
    const [data,setData]=useState(null);
    const [isPending,setIsPending]=useState(true);
    const [error,setError]=useState(null);
   // const url='http://localhost:8000/blogs';
    useEffect(()=>{
        const abortConst=new AbortController();
        
        fetch(url,{signal:abortConst.signal})
          .then(res=>{
            if(!res.ok){
              throw Error('Could not fetch data');
            }
            return res.json();
          })
          .then(data=>{
            setData(data);
            setIsPending(false);
            setError(null);
          })
          .catch(err=>{
            
           if(err.name==='AbortError'){
           console.log('fetch aborted');
           //console.log(err);
           } else {
            setIsPending(false);
            setError(err.message);
           
           }
          })
        return ()=>abortConst.abort();
       },[url])
       console.log(data);

       return {data,isPending,error}
}

export default useFetch;