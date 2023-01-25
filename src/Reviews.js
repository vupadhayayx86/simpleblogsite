import React, { useEffect, useState } from 'react'
import useFetch from './useFetch';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Reviews() {
    
    const [values,setValues]=useState(null)
    useEffect(()=>{
      axios.get('https://634d0902acb391d34a91faba.mockapi.io/reviews').then((response)=>{
       setValues(response.data)
      });
    },[]);
   
   // console.log(reviews);
    //console.log(rerror)
  return (
    <div className='blog-list'>
        <h1>All Reviews</h1>
        <p className='new-review'><Link to="/addreview" style={{
                    backgroundColor:'#f1356d',
                    color:'white',
                    borderRadius:'5px',
                    textDecoration:'none',
                    fontSize:16,
                    padding:5,
                    marginBottom:10
                  }}>Add Review</Link></p>
        {values &&
            values.map((review)=>(
                <div className="blog-preview" key={review.id}>
                  <Link to={`/reviews/${review.id}`} >
                  <h2>{review.username}</h2>
                    <p>{review.body}</p>
                    <br />
                    <strong>Rating: {review.rating}</strong>
                  </Link>
                </div>
            ))
        }

        

    </div>
  )
}
