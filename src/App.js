import Navbar from "./nav";
import Home from "./Home";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
import Reviews from "./Reviews"
import AddReview from "./AddReview";
import cors from 'cors'
function App() {

  return (
    
    <Router>
      
    <div className="App">

        <Navbar />
      <div className="content">
      <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route exact path="/home">
        <Home />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/reviews">
          <Reviews />
        </Route>
        <Route path="/addreview">
          <AddReview />
        </Route>
        <Route path="/blogs/:id">
        <BlogDetails /> 
        </Route>
        <Route path="*">
        <NotFound />
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
