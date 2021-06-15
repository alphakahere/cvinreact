import './App.css';
import Profile from './Components/Profile/Profile';
import Parcours from './Components/Right-area/Parcours';

function App() {
  return (
    <div className="py-3">
      <div className="container">
        <div className="row">
        <Profile  />
        <Parcours />
        </div>
      </div>
    </div>
  );
}

export default App;
