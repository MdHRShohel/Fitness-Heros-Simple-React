import { useState } from 'react';
import './App.css';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';

function App() {
  const [time, setTime] = useState([]);
  return (
    <div className="App">
      <Home time={time} setTime={setTime}></Home>
      <Profile time={time} setTime={setTime}></Profile>
    </div>
  );
}

export default App;
