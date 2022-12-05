import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Lawyers from './Pages/Lawyers/Lawyers';
import LawyersDetails from './Pages/LawyersDetails/LawyersDetails';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/connecter' element={<Login />} />
        <Route path='/enregistrer' element={<Register />} />
        <Route path='/avocats' element={<Lawyers />} />
        <Route path='/avocatID' element={<LawyersDetails />} />
      </Routes>
    </div>
  );
}

export default App;
