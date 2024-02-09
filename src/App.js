import './App.css'
import Sidebarone from './components/Sidebar/Sidebarone';
import MainDash from './components/MainDash/MainDash';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebarone/>
        <MainDash/>
      </div>
    </div>
  );
}

export default App;
