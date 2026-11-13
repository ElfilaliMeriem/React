import { Carte } from "./carte";
export function ListeCartes({liste_qst,affchrpns}){
    return <div className="cart">
        {liste_qst.map((x,i)=><Carte questions={x} afficherReponse={affchrpns} key={i}/>)}
    </div>
}