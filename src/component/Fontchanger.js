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
const underli=()=>{
    let under= document.getElementById("underline");
    let upper = document.getElementById("upperenteredtext");
    if(under.value==="true"){
        upper.style.textDecorationLine="underline";
        under.style.background=" linear-gradient(145deg, #285b39, #214d30)";
        under.style.boxShadow="5px 5px 10px #122a1a,-5px -5px 10px #388050";
        under.value="false";
    }else{
        upper.style.textDecorationLine="none";
        under.style.background=" #255535";
        under.style.boxShadow=" inset 5px 5px 10px #122a1a,inset -5px -5px 10px #388050";
        under.value="true";
    }

}
const boldli=()=>{
    let upper = document.getElementById("upperenteredtext");
    let under= document.getElementById("bold");
    if(under.value==="true"){
        upper.style.fontWeight="bold";
        under.style.background=" linear-gradient(145deg, #285b39, #214d30)";
        under.style.boxShadow="5px 5px 10px #122a1a,-5px -5px 10px #388050";
        under.value="false";
    }else{
        upper.style.fontWeight="none";
        under.style.background=" #255535";
        under.style.boxShadow=" inset 5px 5px 10px #122a1a,inset -5px -5px 10px #388050";
        under.value="true";
    }

}
const italicli=()=>{
    let upper = document.getElementById("upperenteredtext");
    let under= document.getElementById("italic");
    if(under.value==="true"){
        upper.style.fontStyle="italic";
        under.style.background=" linear-gradient(145deg, #285b39, #214d30)";
        under.style.boxShadow="5px 5px 10px #122a1a,-5px -5px 10px #388050";
        under.value="false";
    }else{
        upper.style.fontStyle="none";
        under.style.background=" #255535";
        under.style.boxShadow=" inset 5px 5px 10px #122a1a,inset -5px -5px 10px #388050";
        under.value="true";
    }

}
const[font,setFont] = useState("myfont1")
const fontchanger=(event)=>{
    const select = event.target.value;
    setFont(select)
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
                <h4 id="gettext">Fonts-
                    <button onClick={underli} value="true" id="underline">U</button>
                    <button onClick={italicli} value="true" id="italic">I</button>
                    <button onClick={boldli} value="true" id="bold">B</button>
                    <select  name="Fonts" onChange={fontchanger} value={font} id="fontlist">
                        <option value="value" id="values" selected>Default</option>
                        <option id="BebasNeues" value="BebasNeue">BebasNeue</option>
                        <option id="BlackOpsOnes"value="BlackOpsOne">BlackOpsOne</option>
                        <option id="Caveats" value="Caveat">Caveat</option>
                        <option id="DancingScripts" value="DancingScript">DancingScript</option>
                        <option id="GamjaFlowers" value="GamjaFlower">GamjaFlower</option>
                        <option id="honks" value="honk">honk</option>
                        <option id="Lobsters" value="Lobster">Lobster</option>
                        <option id="NotoSansJPs" value="NotoSansJP">NotoSansJP</option>
                        <option id="Pacificos" value="Pacifico">Pacifico</option>
                        <option id="ProtestGuerrillas" value="ProtestGuerrilla">ProtestGuerrilla</option>
                        <option id="ProtestRevolutions" value="ProtestRevolution">ProtestRevolution</option>
                        <option id="ProtestRiots" value="ProtestRiot">ProtestRiot</option>
                        <option id="ProtestStrikes" value="ProtestStrike">ProtestStrike</option>
                        <option id="RubikGlitchPops" value="RubikGlitchPop">RubikGlitchPop</option>
                        <option id="SingleDays" value="SingleDay">SingleDay</option>
                        <option id="Sixtyfours" value="Sixtyfour">Sixtyfour</option>
                    </select>
                <div className="copyplacer">
                <Copy/>
            </div></h4>
                <textarea name="text" value={text} style={{fontFamily:font}} readOnly id="upperenteredtext" placeholder=" we will do for you" cols="50" rows="20"></textarea>
            </div>
    </div>
    )
}