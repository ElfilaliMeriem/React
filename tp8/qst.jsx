import { useState } from "react"

export function Question ({questions:{enonce="",option=[],reponseCorrect=0}}){
    const [rp,setrp]=useState(0);
    
    return <div>
        <h3>{enonce}</h3>
        {option.map(x=><input type="button" value={x} onClick={(e)=>setrp(e.target.value)}/>)}
        <p style={{color:(reponseCorrect==rp)?"rgb(5, 125, 85)" : "red"}}>{(reponseCorrect==rp)? rp + " est une bonne reponse":(rp>0)? rp + " est mauvaise reponse":""}</p>
    </div>
}