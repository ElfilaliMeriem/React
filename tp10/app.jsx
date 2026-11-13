import { useState } from "react";
import {utilisateurs,role} from "./data"
import {Tetre} from './tetre'

export function App(){
    const [rch,setrch]=useState("");
    let x="";
    const [list,setlist]=useState(utilisateurs);
    const [u,setu]=useState({});
    const [m,setm]=useState({});
    const [btn,setbtn]=useState("Ajouter");
    
    return <div>
        <Tetre tetre="liste des utilisateurs"/>
        <input type="texte" onChange={(e)=>x=e.target.value}/> <button onClick={()=>setrch(x)}>Recherche</button><br/><br/>
        <table border="1">
            <thead>
            <tr>
                <th>id</th>
                <th>Nom Complet</th>
                <th>Role</th>
                <th>Etat</th>
                <th>Decision</th>
                <th>Modifier</th>
                <th>Supprimer</th>
            </tr>
            </thead>
            <tbody>
            {list.filter(x=>x.role.toLocaleLowerCase().includes(rch.toLowerCase())).map((x,i)=>
            <tr key={i}>
                <td>{x.id}</td>
                <td>{x.nom}</td>
                <td>{x.role}</td>
                <td>{x.etat}</td>
                <td>
                    <button onClick={()=>
                    setlist(list.map(y=>(y.id!=x.id)?y:{...y,etat:(y.etat=="en cours" || y.etat == "bloque")?"valide":"bloque",nbDeBlocages:(y.etat=="bloque") ?y.nbDeBlocages+1:y.nbDeBlocages}))
                    }
                    >
                    {(x.etat=="en cours")?"Valider":(x.etat=="valide")?"Bloquer":"Debloquer"} 
                    </button>
                    {x.etat=="bloque" && `Nombre de deblocage : ${x.nbDeBlocages}`}
                    </td>
                    <td><button onClick={()=>{setm({id:x.id,nom:x.nom,role:x.role});setbtn("Modifier")}}>Modifier</button></td>
                    <td><button onClick={()=>setlist(list.filter(y=>y.id!=x.id))}>Supprimer</button></td>
            </tr>)}
            </tbody>
        </table>
        <Tetre tetre={(btn=="Ajouter")?"Nouvel utilisateur":"Modifier utilisateur"}/>
        <form onSubmit={(e)=>{e.preventDefault();(btn=="Ajouter")?setlist([...list,{id:list.length+1,nom:u.nom,role:u.role,etat:"en cours",nbDeBlocages:0}]):setlist(list.map(x=>(x.id!=m.id)?x:{id:m.id,nom:m.nom,role:m.role,etat:"en cours",nbDeBlocages:0}))}}>
        <label>Nom complet</label><br/><br/>
        <input type="text" onChange={(e)=>{(btn=="Ajouter")?setu({nom:e.target.value}):setm({...m,nom:e.target.value})}} value={m.nom}/><br/><br/>
        <label>Role</label><br/><br/>
        {(btn=="Ajouter")?
        role.map((x,i)=><div key={i}><input type="radio" name="role" value={x} onChange={(e)=>setu({...u,role:e.target.value})}/>{x}<br/><br/></div>)
        :role.map((x,i)=><div key={i}><input type="radio" name="role" value={x} onChange={(e)=>setm({...m,role:e.target.value})} checked={(x.includes(m.role))} />{x}<br/><br/></div>)}
        <input type="submit" value={(btn=="Modifier")?btn:btn}/>
        </form> 
    </div>
}