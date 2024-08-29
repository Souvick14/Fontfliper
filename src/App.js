// import logo from './logo.svg';
import './App.css';
import './animation.css';
import "./Uppercase.css";

import { useState } from 'react';
import { useEffect } from 'react';
// import './Copy.css';
// import Navbar from './component/Navbar';
import Uppercase from './component/Uppercase';
import Lowercase from './component/Lowercase';
import Fontchanger from './component/Fontchanger';


function App() {
    const[change,setChange]=useState(null);
    useEffect(() => {
        setChange(<Uppercase/>);
      }, []);
    const uppe=()=>{
        setChange(<Uppercase/>);
        // document.getElementById("forchange").innerHTML={change};
    };
    const low=()=>{
        setChange(<Lowercase/>);
        // document.getElementById("forchange").innerHTML={change};
    };
    const font=()=>{
        setChange(<Fontchanger/>);
        // document.getElementById("forchange").innerHTML={change};
    };
  const boxfi=()=>{
    let box1= document.getElementById("boxid1")
    let box2= document.getElementById("boxid2")
    let box3= document.getElementById("boxid3")
    let sidenav= document.getElementById("fiv")
    if(sidenav.style.display==="block"){
        sidenav.style.transition="all 0.5s ease-in-out";
        sidenav.style.display="none";
        box2.style.opacity=1;
        box1.style.transform="rotate(0deg) ";
        box1.style.transformOrigin="left";
        box1.style.transition="transform 0s ease-in-out"
        box3.style.transform="rotate(0deg) ";
        box3.style.transformOrigin="left";
        box3.style.transition="transform 0s ease-in-out"
    }else{
        let c = document.getElementById("devborder");
        c.style.left="-9rem";
        c.style.transition="left 3s ease";
        if(document.documentElement.clientWidth<550){
            sidenav.style.animation = "sidenavanimations 0.1s ease-in-out 0s 1 normal";
            sidenav.style.display="block";
            // sidenav.style.width="30%";
            // sidenav.style.transition="width 1s ease-in-out";
            box2.style.opacity=0;
            box1.style.transform="rotate(36.5deg) scaleX(1.1)";
            box1.style.transformOrigin="left";
            box1.style.transition="transform 0.1s ease-in-out"
            box3.style.transform="rotate(-35.2deg) scaleX(1.1)";
            box3.style.transformOrigin="left";
            box3.style.transition="transform 0.1s ease-in-out"
        }else{
            sidenav.style.animation = "sidenavanimations 0.1s ease-in-out 0s 1 normal";
            sidenav.style.display="block";
            // sidenav.style.width="30%";
            // sidenav.style.transition="width 1s ease-in-out";
            
            box2.style.opacity=0;
            box1.style.transform="rotate(39deg) scaleX(1.15)";
            box1.style.transformOrigin="left";
            box1.style.transition="transform 0.1s ease-in-out"
            box3.style.transform="rotate(-36deg) scaleX(1.15)";
            box3.style.transformOrigin="left";
            box3.style.transition="transform 0.1s ease-in-out"
        }
    }
}
const bodyclick=()=>{
    let box1= document.getElementById("boxid1")
    let box2= document.getElementById("boxid2")
    let box3= document.getElementById("boxid3")
    let sidenav= document.getElementById("fiv")
    sidenav.style.display="none";
    box2.style.opacity=1;
    box1.style.transform="rotate(0deg) ";
    box1.style.transformOrigin="left";
    box1.style.transition="transform 0s ease-in-out"
    box3.style.transform="rotate(0deg) ";
    box3.style.transformOrigin="left";
    box3.style.transition="transform 0s ease-in-out"
}

    return (
    <body >
    <nav className="navbar">
    <div className="right">
        <div className="rightright">
        </div>
        <div className="rightleft">
            <h1 className="rightleftup">FontFlipper</h1>
            <h6 className="rightleftdown">Where UPPERCASE meets lowercase in <br/>a Capitalized Comedy!</h6>
        </div>
    </div>
    <div className="left" onClick={boxfi} id="clickbox">
        <li className="box box1" id="boxid1"></li>
        <li className="box" id="boxid2"></li>
        <li className="box" id="boxid3"></li>
    </div>
</nav>
<section className="flotingnavbar" id="fiv">
    <ul className="flotingnavarul">
        <li className="libutton" id="fontchanger" onClick={font}>Font Changer</li>
        <li className="libutton" id="uppercase" onClick={uppe}>Uppercase</li>
        <li className="libutton" onClick={low} id="lowercase">Lowercase</li>
        <li className="libutton" id="captilize">Captilize</li>
    </ul>
    <div className="developerborder" id="devborder">

        <div className="developer">
            <div className="developerleft">
                <h4 className="developerleftup">Souvick Roy</h4>
                <h6 className="developerleftdown">I Work For You</h6>
                </div>
                <div className="developerimage">
          
                </div>
                </div>
        </div>
    </section>
    <div onClick={bodyclick} id="forchange">
    {change}
    </div>
</body>
  );
}

export default App;
