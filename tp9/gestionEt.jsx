import { useState } from "react"

export function GestionEtudiant({listEt,listFl}){
    const [newList,setnewList]=useState({nom:"",prenom:"",note:0,filiere:""});
    const [lstEt,setlstEt]=useState(listEt);
    function f1(e){
        setnewList({...newList,nom:e.target.value})
    }
    function f2(e){
        setnewList({...newList,prenom:e.target.value})
    }
    function f3(e){
        setnewList({...newList,note:e.target.value})
    }
    function f(e){
        setnewList({...newList,filiere:e.target.value})
    }
    function ajt(e){
        e.preventDefault();
        setlstEt([...lstEt,newList]);
    }
    return <div>
        <h3>Ajouter un Etudiant</h3>
        <form onSubmit={ajt}>
            <label>Nom de l'Etudiant</label><br/><br/>
            <input type="text" placeholder="Entrez le nom de l'etudiant" onChange={f1}/><br/><br/>
            <label>Prenom de l'Etudiant</label><br/><br/>
            <input type="text" placeholder="Entrez le prenom de l'etudiant" onChange={f2}/><br/><br/>
            <label>Filiere</label><br/><br/>
            <select onChange={f}>
                <option selected>--Selectionnez une Filiere--</option>
                {listFl.map(x=><option value={x}>{x}</option>)}
            </select><br/><br/>
            <label>Note </label><br/><br/>
            <input type="number" placeholder="Entrez la note de l'etudiant" onChange={f3}/><br/><br/>
            <input type="submit" value="Ajouter" />
        </form>
        <h3>Liste des Etudiant</h3>
        <table border="1">
            <tr>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Note</th>
                <th>Filiere</th>
                <th>Actions</th>
            </tr>
            {lstEt.map(x=><tr>
                <td>{x.nom}</td>
                <td>{x.prenom}</td>
                <td>{x.note}</td>
                <td>{x.filiere}</td>
                <td><button onClick={()=>setlstEt(lstEt.filter(y=>y.nom!=x.nom))}>Supprimer</button></td>
            </tr>)}
        </table>
    </div>
}