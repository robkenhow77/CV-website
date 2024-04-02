import React from "react";

function Header(props){
    return (
        <div className="header">
            <img className = "home" name="home" onMouseDown={props.func}  src="/home.png" alt="home button" />
            <h1 className="name">Robert Howarth</h1>
            <div className="contact">
                <p>Email: robohowarth@outlook.com</p>
                <p>Mobile: 07443537484</p>
            </div>
            
        </div>
    )
}
export default Header ;