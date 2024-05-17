import Home from './Components/Home';
import About from './Components/About';
import { Route, Routes, Link } from 'react-router-dom';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <div className='container'>
        <h1 className='logo'>Puja</h1>
          <ul className='nav'>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/projects"><li>Projects</li></Link>
            <Link to="/contacts"><li>Contacts</li></Link>
          </ul>
      </div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
