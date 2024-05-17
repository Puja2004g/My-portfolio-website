import "./styles/Home.css";
import { Link, Route, Routes } from 'react-router-dom';
import About from "./About";

function Home() {
    return (
        <div className="Acontainer">
            <div className="picture">
                <img src="https://images.unsplash.com/photo-1681622341243-f57c21b519f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybCUyMGluJTIwZm9ybWFsJTIwd2l0aCUyMGdsYXNzZXN8ZW58MHx8MHx8fDA%3D" />
            </div>
            <div className="info">
                <h1>Hi! I am Puja Guchhait</h1>
                <h2 className="para">I am a programmer and a front-end developer from Giridih, Jharkhand.
                    Currently pursuing my 4th year in B.Tech in Electronics and Computer Science Engineering from Kalinga Institute of Industrial Technology, Bhubaneswar, Odisha.</h2>
                <Link to="/about"><button>Know more</button></Link>
            </div>
            <Routes>
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
}

export default Home;