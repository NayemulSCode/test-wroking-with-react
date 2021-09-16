import './App.css';
import AddToFavoriteList from './components/AddToFavoriteList';
import AddToSaveList from './components/AddToBook/AddToSaveList';
import OtpCodeReader from './components/OtpCodeReader';
import OtpReader from './components/OtpReader';
import Rating from './components/Rating';
import SkeletonExample from './components/Skeleton/Skeleton';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router className="App">
       <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rating">Rating Demo</Link>
            </li>
            <li>
              <Link to="/otp">OTP Demo</Link>
            </li>
            <li>
              <Link to="/skeleton">Skeleton Example</Link>
            </li>
            <li>
              <Link to="/wishlist">Add to wish cart</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/rating">
            <Rating />
          </Route>
          <Route path="/otp">
            <OtpReader />
          </Route>
          <Route path="/skeleton">
            <SkeletonExample />
          </Route>
          <Route path="/wishlist">
          <AddToSaveList />
          </Route>
        </Switch>
      {/* <AddToFavoriteList  /> */}
      
    </Router>
  );
}

export default App;
