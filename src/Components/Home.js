import "./styles/Home.css";
import { Link, Route, Routes } from 'react-router-dom';
import About from "./About";
import pic from "./Assets/Profile2.jpg";

function Home() {
    return (
        <div className="Acontainer">
            <div className="picture">
                <img src={pic} />
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