import './App.css'
import Sidebarone from './components/Sidebar/Sidebarone';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RightSIde/RightSide';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebarone/>
        <MainDash/>
        <RightSide/>      
        </div>
    </div>
  );
}

export default App;
