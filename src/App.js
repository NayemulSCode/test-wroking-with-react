import React from 'react'
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
import SkeletonExample1 from './components/Skeleton/SkeletonExample1';
import Skeleton2 from './components/Skeleton/Skeleton2';
import Skeleton3 from './components/Skeleton/Skeleton3';
import Skeleton4 from './components/Skeleton/Skeleton4';
import TogglePassword from './components/ShowPassword/TogglePassword';
import DateTime from './components/DateTime/DateTime';
import Emoji from './components/EmojiPicker/Emoji';
import BootstrapModalCustom from './components/Modal/BootstrapModalCustom';
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
              <Link to="/skeleton2">Skeleton Example 2</Link>
            </li>
            <li>
              <Link to="/skeleton3">Skeleton Example 3</Link>
            </li>
            <li>
              <Link to="/skeleton4">Skeleton Example 4</Link>
            </li>
            <li>
              <Link to="/skeleton5">Skeleton Example 5</Link>
            </li>
            <li>
              <Link to="/wishlist">Add to wish cart</Link>
            </li>
            <li>
              <Link to="/toggle-password">toggle password</Link>
            </li>
            <li>
              <Link to="/date-time">Date Time</Link>
            </li>
            <li>
              <Link to="/emoji">emoji picker</Link>
            </li>
            <li>
              <Link to="/bootstrap-modal">bootstrap modal</Link>
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
          {/* <AddToSaveList /> */}
          </Route>
          <Route path="/skeleton2">
          <SkeletonExample1 />
          </Route>
          <Route path="/skeleton3">
          <Skeleton2 />
          </Route>
            <Route path="/skeleton4">
          <Skeleton3 />
          </Route>
            <Route path="/skeleton5">
          <Skeleton4 />
          </Route>
          <Route path="/toggle-password">
            <TogglePassword />
          </Route>
          <Route path="/date-time">
            <DateTime />
          </Route>
          <Route path="/emoji">
            <Emoji />
          </Route>
          <Route path="/emoji">
            <BootstrapModalCustom />
          </Route>
        </Switch>
      {/* <AddToFavoriteList  /> */}
      
    </Router>
  );
}

export default App;
