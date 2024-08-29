// import react from 'react';

export default function copy(){
    const copychange=()=>{
        let promise = new Promise((resolve, reject) => {
            let sel = document.getElementById("upperenteredtext");
            sel.select();
            document.execCommand("copy");
            resolve("hiiii")
        })
        promise.then((value)=>{
            // document.getElementById("copy").style.width="25px";
            // document.getElementById("copy").style.height="25px";
            document.getElementById("copy").style.transition="all 0.2s ease";
            document.getElementById("copy").style.borderRadius="20%";
            document.getElementById("copy").style.backgroundColor="rgba(255,255,255,0.5)";
            setTimeout(()=>{
                document.getElementById("copy").style.backgroundColor="transparent";
            },500)

        })
    
    }
    return(
        <>
        <button onClick={copychange} id="copy">
            
        </button>
        </>
    )
}