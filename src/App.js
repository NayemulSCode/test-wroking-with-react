import './App.css';
import AddToFavoriteList from './components/AddToFavoriteList';
import AddToSaveList from './components/AddToBook/AddToSaveList';
import OtpCodeReader from './components/OtpCodeReader';
import OtpReader from './components/OtpReader';
import Rating from './components/Rating';
function App() {
  return (
    <div className="App">
      <Rating />
      <OtpReader />
      {/* <AddToFavoriteList  /> */}
      <AddToSaveList />
    </div>
  );
}

export default App;
