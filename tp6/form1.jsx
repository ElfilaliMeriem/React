import { useState } from "react"
import {personels,service} from "./data"
export function Ajouter(){
    const [rchr,setrchr] = useState("");
    const [liste,setliste] = useState(personels);
    const X={
        id:0,
        n:"",
        p:"",
        s:0
    };
    function f1(e){
        setrchr(e.target.value)
    }
    function idf(e){X.id=e.target.value;}
    function nom(e){X.n=e.target.value;}
    function prenom(e){X.p=e.target.value;}
    function srv(e){X.s=e.target.value;}
    function f2(e){
        e.preventDefault();
        setliste([...liste,{id:X.id,nom:X.n,prenom:X.p,serviceId:X.s}]);
    }
    return <div><form onSubmit={f2}>
        <fieldset>
            <legend>Nouveau Personl</legend>
            Id: <input type="number" onChange={idf}/>
            Nom: <input type="text" onChange={nom}/>
            Prenom: <input type="text" onChange={prenom}/>
            Services: <select onChange={srv}>
                {service.map(x=><option value={x.titre} >{x.titre}</option>)}
            </select>
            <input type="submit" value="Ajouter"/>
        </fieldset>
    </form>
    Nom: <input type="text" onChange={f1}/>
    <h2>Liste de personels</h2>
    <table border='1'>
        <tr>
            <th>Id</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Supprimer</th>
        </tr>
        {liste.filter(x=>x.nom.includes(rchr)).map(x=>
            <tr>
            <td>{x.id}</td>
            <td>{x.nom}</td>
            <td>{x.prenom}</td>
            <td><input type="button" value="supprimer" onClick={()=>setliste(liste.filter(y=>y.id!=x.id))}/></td>
            </tr>
        )}
    </table>
    
    </div>
}