import React from 'react'
import Bloglist from './Bloglist';
import useFetch from './useFetch';

function Home() {
      const {data,isPending,error}=useFetch('https://634d0902acb391d34a91faba.mockapi.io/blogs');
      
      

  return (
    <div className='home'>
        {/* <Bloglist blogs={blogs} title="All Blogs!" /> */}
        {error && <div>{error}</div>}
        {isPending && <div>Loading....</div>}
        {data && <Bloglist data={data} title={"All Blogs!"}/>}
        </div>
  )
}

export default Home