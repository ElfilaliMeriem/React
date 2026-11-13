import { useState } from "react"

export function GestionEtudiant({listE,flr}){
    const [E,setE]=useState({});
    const [lstEt,setlstEt] = useState(listE);
    return <div><h3>Ajouter un Etudiant</h3>
    <form onSubmit={(e)=>{e.preventDefault();setlstEt([...lstEt,E])}}>
    <label>Nom de l'étudiant</label><br/><br/>
    <input type="text" placeholder="Entrez le nom de l'étudiant" onChange={(e)=>setE({nom:e.target.value})}/><br/><br/>
    <label>Prenom de l'étudiant</label><br/><br/>
    <input type="text" placeholder="Entrez le prenom de l'étudiant" onChange={(e)=>setE({...E,prenom:e.target.value})}/><br/><br/>
    <label>Filière</label><br/><br/>
    <select onChange={(e)=>setE({...E,filiere:e.target.value})}>
        {flr.map((x,i)=><option key={i} value={x}>{x}</option>)}
    </select><br/><br/>
    <label>Note</label><br/><br/>
    <input type="text" placeholder="Entrez le note de l'étudiant" onChange={(e)=>setE({...E,note:e.target.value})}/><br/><br/>
    <input type="submit" value="Ajouter"/>
    </form>
    <h3>Liste des Etudiant</h3>
    <table border={1}>
        <tr>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Note</th>
            <th>Filière</th>
            <th>Actions</th>
        </tr>
        {lstEt.map((x,i)=><tr key={i}>
            <td>{x.nom}</td>
            <td>{x.prenom}</td>
            <td>{x.note}</td>
            <td>{x.filiere}</td>
            <td><button onClick={()=>setlstEt(lstEt.filter(y=>y.nom!=x.nom))}>Supprimer</button></td>
        </tr>)}
    </table>
    <p>Nombre des étudiant Admis:{lstEt.filter(x=>x.note>10).lenght}</p>
    <p>Nombre des étudiant avec une moyenne supérieure à 10:{lstEt.filter(x=>x.note>10).length}</p>
    </div>
}