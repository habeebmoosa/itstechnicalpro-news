import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Ai from './pages/Ai';
import Crypto from './pages/Crypto';
import Gadgets from './pages/Gadgets';
import Startups from './pages/Startups';
import Apps from './pages/Apps';
import Home from './pages/Home';
import Footer from './components/Footer';


function App() {
  return (
    <div className='app'>
      <NavBar/>
      <div className='rightSection'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/ai' element={<Ai/>} />
          <Route path='/crypto' element={<Crypto/>} />
          <Route path='/gadgets' element={<Gadgets/>} />
          <Route path='/startups' element={<Startups/>} />
          <Route path='/apps' element={<Apps/>} />
        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
