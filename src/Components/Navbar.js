import "./styles/Navbar.css";
import { Link, Routes, Route } from 'react-router-dom';
import About from "./About";
import Projects from "./Projects";
import App from "../App";
import Contacts from "./Contacts";


function Navbar() {
    return (
        <div>
            <div className="container">
                <h1 className="logo">Puja</h1>
                <ul className="nav">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/About_nav"><li>About</li></Link>
                    <Link to="/Projects"><li>Projects</li></Link>
                    <Link to="/Contacts"><li>Contacts</li></Link>
                </ul>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/About_nav" element={<About_nav />} />
                    <Route path="/Projects" element={<Projects />} />
                    <Route path="/Contacts" element={<Contacts />} />
                </Routes>
            </div>
        </div>
    )
}

export default Navbar;