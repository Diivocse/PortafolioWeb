/* import './App.css'; */
import './AppRes.css'; 
import BottomPage from './components/BottomPage';
import CardV1 from './components/CardV1';
import NavHeader from './components/NavHeader';
import ProfileInfo from './components/ProfileInfo';

function App() {
  return (
    <div className="App">
      <NavHeader/>
      <ProfileInfo/>
      <CardV1/>
      <BottomPage/>
    </div>
  );
}

export default App;
