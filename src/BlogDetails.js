import { useHistory, useParams} from "react-router-dom"
import useFetch from "./useFetch";

const BlogDetails  = () => {

    const {id} = useParams();
    const {data:blog,error,isPending}= useFetch('https://634d0902acb391d34a91faba.mockapi.io/blogs/' + id);
    const history=useHistory();

    const handleClick=()=>{
        fetch('https://634d0902acb391d34a91faba.mockapi.io/blogs/'+blog.id,{
            method:'DELETE',
        }).then(()=>{
            history.push('/');
        })
    }
    return ( <div className="blog-details">
       {isPending && <div>Loading....</div>}
       {error && <div>error</div>}
       {blog && (
        <article>
            <h2>{blog.title}</h2>
            <p>Written By {blog.author}</p>
            <div>{blog.body}</div>
            <button onClick={handleClick}>Delete</button>
        </article>
       )}
    </div>
    );
}
 
export default BlogDetails ;