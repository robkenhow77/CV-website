import React from "react";


function CV_cover(props){
    return (
            <div className = "cv">
                <object data = {props.link} width="100%" >{props.alt}</object>  
            </div>
    )
}
export default CV_cover ;

