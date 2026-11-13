import {Entete} from "./entete"
import {GestionEtudiant} from "./gestionEt"
import {listetudiants,listfilieres} from "./data"
export function App(){
    return <div>
        <Entete titre="Gestion des Etudiants"/>
        <GestionEtudiant listEt={listetudiants} listFl={listfilieres} />
    </div>
}