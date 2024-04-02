import React,{useState} from "react";
import CV_cover from "./Components/CV";
import Hobbies from "./Components/Hobbies";
import Coding from "./Components/Coding";


function App(){

    let cv = (
        <CV_cover 
            link = "./CV Robert Howarth (02.04.24).pdf"
            alt = "CV"
        />
    )

    let coverLetter = (
        <CV_cover 
            link = "./Generic Cover Letter.pdf"
            alt = "cover letter"
        />
    )
    
    let hobbies = (
        <Hobbies />
    )

    let coding = (
        <Coding />
    )

    
    const [content, setContent] = useState(cv)
    const [underline, setUnderline] = useState(["underline","none","none","none"])
    const [menu, setMenu] = useState([false,""])
    
    function click(e){
        let x = e.target.getAttribute('name');
        setContent(eval(x));

        switch(x){
            case "cv":
                setUnderline(["underline","none","none","none"])
                break;
            case "coverLetter":
                setUnderline(["none","underline","none","none"])
                break;
            case "coding":
                setUnderline(["none","none","underline","none"])
                break;
            case "hobbies":
                setUnderline(["none","none","none","underline"])
                break;
            default:
        }

        
        setMenu([false,""])
        
        
    }
   

    let list = (
        <div className="menu" >
            <ul style={{marginTop:"11vh"}}>
                <li onMouseDown={click} style={{cursor:"pointer", textDecoration: underline[0]}} name="cv">CV</li>
                <li onMouseDown={click} style={{cursor:"pointer", textDecoration: underline[1]}} name="coverLetter">Cover Letter</li>
                <li onMouseDown={click} style={{cursor:"pointer", textDecoration: underline[2]}} name="coding">Coding</li>
                <li onMouseDown={click} style={{cursor:"pointer", textDecoration: underline[3]}} name="hobbies">Hobbies</li>
            </ul>
            <p className="header-p">Contact Information:</p>
            <p className="header-p">Email: robohowarth@outlook.com</p>
            <p className="header-p">Mobile: 07443537484</p>

        </div>
       
    )

    

    function menuFunc(){
        if(menu[0] === false){
            setMenu([true,list,"block"])
        }else{
            setMenu([false,"","none"])
        }
            

        
    }

    



   
    return (
        <div>
            
            <div className = "sideBar" >
                <div className="profilePic"></div>
                <h1 style={{display: "inline-block", color: "#ECE9E1"}}>Robert Howarth</h1>
                
                <ul className="side-menu">
                    <li onMouseDown={click} style={{cursor:"pointer", textDecoration: underline[0]}} name="cv">CV</li>
                    <li onMouseDown={click} style={{cursor:"pointer", textDecoration: underline[1]}} name="coverLetter">Cover Letter</li>
                    <li onMouseDown={click} style={{cursor:"pointer", textDecoration: underline[2]}} name="coding">Coding</li>
                    <li onMouseDown={click} style={{cursor:"pointer", textDecoration: underline[3]}} name="hobbies">Hobbies</li>
                </ul>

                <p className="sidebar-p">Contact Information:</p>
                <p className="sidebar-p">Email: robohowarth@outlook.com</p>
                <p className="sidebar-p">Mobile: 07443537484</p>

                <div className="button" onMouseDown={menuFunc} style={{cursor:"pointer"}}>
                    
                </div>

            </div>
            {menu[1]}
            
            

            <div className="main">
                {content}
            </div>
            


        </div>
        )
}
export default App ;

