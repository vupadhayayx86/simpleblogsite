import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function AddReview() {
    const [username,setUsername]=useState('');
    const [body,setreviewBody]=useState('');
    const [rating,setRatings]=useState('');
    const [isPending,setIsPending]=useState(false);
    const history=useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const review={username,body,rating};
        setIsPending(true);
         fetch('https://634d0902acb391d34a91faba.mockapi.io/reviews',{
      method:'POST',
     headers:{"Content-Type": "application/json"},
      body: JSON.stringify(review)
     }).then(()=>{
    //    console.log('New Review Added');
        history.push('/reviews');
     }).catch((err)=>{
      console.log(err);
   })
   
    }
    //const [isPending,setIsPending]=useState(false);
  return (
    <div className='create'>
        <h1>Add a New Review</h1>
        <form onSubmit={handleSubmit}>
            <label>Username : </label>
            <input type="text" required value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
            <label>Review : </label>
            <textarea value={body} required onChange={(e)=>{setreviewBody(e.target.value)}}></textarea>
            <label>Ratings : </label>
            <input type="text" value={rating} required onChange={(e)=>{setRatings(e.target.value)}}/>
            {!isPending && <button>Submit</button>}
          {isPending && <button>Submitting....</button>}
        </form>
    </div>
  )
}
