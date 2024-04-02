import React from "react";


function Hobbies(props){
    return (
        <div className="hobbies">
            <h2>Hobbies</h2>
            <div className="hobbies-grid" >
                <p >When I'm not inside writing code I'm outdoors adventuring or exercising.
                I currently play football for the university 2nd team, go to the gym and run regularly with the aim of completing a marathon next summer. </p>
                <img src="./half-marathon.jpg" alt="Half marathon"/>

               
                <p className="grid-p">I am a keen skier and snowboarder…</p>
                <img src="./IMG_2842.jpeg" alt="Skiing"/>
               

                <p>…with a love for hiking and camping.</p>
                <img src="./chamonix.jpg" alt="Hiiking"/>
            </div> 
        </div>
        
    )
}
export default Hobbies ;