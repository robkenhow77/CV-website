import React from "react";


function Coding(props){
    return (
        <div className="coding">
            <div >
                <h2>Coding</h2>
                <p>Below are some examples of coding projects I have created and material I have studied.</p>
                <p>Check out my GitHub: robkenhow77</p>

                <h3>Full Stack Web Development</h3>
                <ul className="mern">
                    <li >MongoDB</li>
                    <li >Express</li>
                    <li >React</li>
                    <li >NodeJS</li>
                </ul>
                <p>Worlde</p>
                <p>Popular word game created using Javascript. </p>
                <a style={{display:"block"}} href="https://robkenhow77.github.io/Wordle/">Check it out for yourself!</a>
                <img className="content" src="./wordle.png" alt="wordle"/>
            </div>
            <div>
                <h3>Python</h3>
                <p>Snake</p>
                <p >The classic snake arcade game, created using tkinter.</p>
                <video className = "content" autoPlay loop>
                    <source src="./Snake.mp4" type="video/mp4"/>
                </video>
            </div>
            <div >
                <h3>C++</h3>
                <p>Remote Controlled Tank</p>
                <p >I created a 3D printed remote controlled tank. The commands are sent via my laptop. It uses an arduino microcontroller and is programmed using C++. </p>
                <div>
                    <video className="content" autoPlay loop>
                        <source src="./Tank.mp4" type="video/mp4"/>
                    </video>
                    <img  className="content" src="./image002.png" alt="tank CAD exploded view" />
                    <img className="content" src="./image001.png" alt="tank CAD" />
                    
                </div>
            </div>
        </div>
            
       
    )
}
export default Coding ;