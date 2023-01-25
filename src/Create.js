import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';

export default function Create() {

  const [title,setTitle]=useState('');
  const [body,setBody]=useState('');
  const [author,setAuthor]=useState('mario');
  const [isPending,setIsPending]=useState(false);
  const history=useHistory();

  const handleSubmit=(e)=>{
    e.preventDefault();
    const blog={title,body,author};
    setIsPending(true);
    
    fetch('https://634d0902acb391d34a91faba.mockapi.io/blogs',{
      method:'POST',
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(()=>{
      console.log('new blog added');
      history.push('/');
    }).catch((err)=>{
      console.log(err);
    })

  }
  return (
    <div className='create'>
        <h1>Add a New Blog</h1>
        <form onSubmit={handleSubmit}>
          <label>Blog Title: </label>
          <input type="text" 
          required
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          />
          <label>Blog body: </label>
          <textarea required value={body}
          onChange={(e)=>setBody(e.target.value)}></textarea>
          <label>Blog author</label>
          <select
          value={author}
          onChange={(e)=>setAuthor(e.target.value)}
          >
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>
          {!isPending && <button>Add Blog</button>}
          {isPending && <button>Adding Blog....</button>}
          {/* <p>{title}</p>
          <p>{body}</p>
          <p>{author}</p> */}
          
        </form>
    </div>
  )
}
