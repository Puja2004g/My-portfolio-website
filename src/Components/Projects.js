import "./styles/Projects.css";
import calc from "./Assets/Calculator.png";
import drum from "./Assets/Drum_kit.png";
import dice from "./Assets/Dice Game.png";
import coder from "./Assets/iCoder.png";
import hash from "./Assets/Java hashmap.png";
import myntra from "./Assets/Myntra_clone.png";
import project from "./Assets/poject page.png";


function Projects() {
    return (
        <div>
            <h1 className="title">My Projects</h1>
            <div className='divide'>
                <div className='div1'>
                    <div>
                        <img src={calc} />
                    </div>
                    <div>
                        <h1>Calculator</h1>
                        <h3>Made using HTML, CSS, JS</h3>
                        <button><a href="https://github.com/Puja2004g/My_calculator" target="_blank">Source code</a></button>
                    </div>
                </div>
                <div className='div2'>
                    <div>
                        <img src={drum} />
                    </div>
                    <div>
                        <h1>The Drum kit</h1>
                        <h3>Made using HTML, CSS, JS</h3>
                        <button><a href="https://github.com/Puja2004g/The-Drum-Kit" target="_blank">Source code</a></button>
                    </div>
                </div>
                <div className='div3'>
                    <div>
                        <img src={dice} />
                    </div>
                    <div>
                        <h1>The dice game</h1>
                        <h3>Made using HTML, CSS, JS</h3>
                        <button><a href="https://github.com/Puja2004g/The-Dice-Game" target="_blank">Source code</a></button>
                    </div>
                </div>
                <div className='div4'>
                    <div>
                        <img src={coder} />
                    </div>
                    <div>
                        <h1>iCoder</h1>
                        <h3>Website made completely using Bootstrap</h3>
                        <button><a href="https://github.com/Puja2004g/Bootstrap-practice" target="_blank">Source code</a></button>
                    </div>
                </div>
                <div className='div5'>
                    <div>
                        <img src={hash} />
                    </div>
                    <div>
                        <h1>Online banking system</h1>
                        <h3>Made using Java hashmap</h3>
                        <button><a href="https://github.com/Puja2004g/Online-banking-system" target="_blank">Source code</a></button>
                    </div>
                </div>
                <div className='div6'>
                    <div>
                        <img src={myntra} />
                    </div>
                    <div>
                        <h1>Myntra Clone</h1>
                        <h3>Made using HTML, CSS</h3>
                        <button><a href="https://github.com/Puja2004g/Myntra_clone" target="_blank">Source code</a></button>
                    </div>
                </div>
                <div className='div7'>
                    <div>
                        <img src={project} />
                    </div>
                    <div>
                        <h1>An academic Project website</h1>
                        <h3>Made using HTML, CSS</h3>
                        <button><a href="https://github.com/Puja2004g/Web-development-assignment" target="_blank">Source code</a></button>
                    </div>
                </div>

                <p>All my projects are available on <a href="https://github.com/Puja2004g" target="_blank">Github</a>.</p>
            </div>
        </div>
    )
}

export default Projects;