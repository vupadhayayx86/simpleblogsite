import { Link } from "react-router-dom";
const NotFound = () => {
    return ( <div>
        <h2 className="not-found">404 Not Found</h2>
        <Link to="/">Home</Link>
    </div> );
}
 
export default NotFound;