import './App.css';
import CardV1 from './components/CardV1';
import NavHeader from './components/NavHeader';
import ProfileInfo from './components/ProfileInfo';

function App() {
  return (
    <div className="App">
      <NavHeader/>
      <ProfileInfo/>
      <CardV1/>
    </div>
  );
}

export default App;
