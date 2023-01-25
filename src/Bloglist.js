import React from 'react'
import {Link} from 'react-router-dom'

function Bloglist({data, title}) {

  return (
    <div className='blog-list'>
        <h1>{title}</h1>
        {console.log(data)}
                {data.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
              <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
              </Link>
            </div>
        ))}
    </div>
  )
}

export default Bloglist