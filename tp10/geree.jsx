import { useState } from "react"
export function Geree({utl}){
    const [rch,setrch]=useState("");
    const [list,setlist]=useState(utl);
    
    return <div>
        <input type="texte" onChange={(e)=>x=e.target.value}/> <button onClick={()=>setrch(x)}>Recherche</button><br/><br/>
        <table border="1">
            <thead>
            <tr>
                <th>id</th>
                <th>Nom Complet</th>
                <th>Role</th>
                <th>Etat</th>
                <th>Decision</th>
            </tr>
            </thead>
            <tbody>
            {list.filter(x=>x.role.includes(rch)).map((x,i)=>
            <tr key={i}>
                <td>{x.id}</td>
                <td>{x.nom}</td>
                <td>{x.role}</td>
                <td>{x.etat}</td>
                <td>
                    <button onClick={()=>
                    setlist(list.map(y=>(y.id!=x.id)?y:{id:x.id,nom:y.nom,role:y.role,etat:(y.etat=="en cours" || y.etat == "bloque")?"valide":"bloque",nbDeBlocages:(y.etat=="bloque") ?y.nbDeBlocages = y.nbDeBlocages+1:y.nbDeBlocages}))
                    }
                    >
                    {(x.etat=="en cours")?"Valider":(x.etat=="valide")?"Bloquer":"Debloquer"} 
                    </button>
                    {x.etat=="bloque" && `Nombre de deblocage : ${x.nbDeBlocages}`}
                    </td>
            </tr>)}
            </tbody>
        </table>
        
    </div>
}