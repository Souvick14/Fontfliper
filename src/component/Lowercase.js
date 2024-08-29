import {useState} from 'react';
// import "./src/Copy.css";
import Copy from './Copy';

export default function Lowercase(){
    const[text,setText]=useState("")

    const change=()=>{
        let changein=document.getElementById("userenteredtext").value
        setText(changein.toLowerCase());
    }
function hello(){
    document.getElementById("userenteredtext").style.border=" 1px transparent solid";
    document.getElementById("userenteredtext").style.transition=" all 0.5s";
    document.getElementById("userenteredtext").style.background=" linear-gradient(197deg, #0da6003a 17%, rgba(0,47,7,0.3916139746914391) 83%)";
    document.getElementById("userenteredtext").style.backdropFilter = "blur(5px)";
    document.getElementById("userenteredtext").style.outline=" none";
    document.getElementById("upperenteredtext").style.border=" 1px transparent solid";
    document.getElementById("upperenteredtext").style.transition=" all 0.5s";
    document.getElementById("upperenteredtext").style.background=" linear-gradient(197deg, #0da6003a 17%, rgba(0,47,7,0.3916139746914391) 83%)";
    document.getElementById("upperenteredtext").style.backdropFilter = "blur(5px)";
    document.getElementById("upperenteredtext").style.outline=" none";
}
    return(
        <div className="backblur">
        <div className="entertext">
            <h4 id="entertext">Enter Your Texts-</h4>
            <textarea name="text" id="userenteredtext" onChange={change} onClick={hello} placeholder="enter" cols="50" rows="20"></textarea>
        </div>
        <div className="imgarrow">
        </div>
            <div className="uppercasetext">
                <h4 id="gettext">lowercase version-
                <div className="copyplacer">
                <Copy/>
            </div></h4>
                <textarea name="text" value={text} readOnly id="upperenteredtext" placeholder=" we will do for you" cols="50" rows="20"></textarea>
            </div>
    </div>
    )
}