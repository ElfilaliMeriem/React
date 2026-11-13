
import { useState } from "react";
export function App(){
    let [p,setp] = useState("");
    let [x,setx] = useState("");
    function f(e){
        setp(e.target.value);
        setx(p);
    }
    function f1(){
        setx(p)
    }
    return <div>
        Nom:<input type="text" onChange={f}/>
        <input type="button" onClick={f1} value="ok"/>
        <p>{x}</p>
    </div>
}