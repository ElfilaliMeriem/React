import { useState } from "react"
import {Header} from "./header"
import {liste_questions} from "./data"
import {ListeCartes} from "./listrCartes"

export function App(){
    const [afficherReponse,setafficherReponse]=useState(false);
    const [btn,setbtn]=useState("Afficher");
    return <div className="parent">
        <Header titre="Quiz interactif"/>
        <button onClick={()=>{setafficherReponse(btn==="Afficher");setbtn(btn=="Afficher"?"Masquer":"Afficher")}} value={btn} style={{backgroundColor:(btn=="Afficher")?"green":"red"}}>{btn} les reponses </button>
        <ListeCartes liste_qst={liste_questions} affchrpns={afficherReponse}/>
        <span>Nombre de question: {liste_questions.length}</span>
    </div>
}