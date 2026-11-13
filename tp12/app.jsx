
import {GestionEtudiant} from "./GestionEtudiant"
import {listetudiants,listfilieres} from "./data"
import { Entete } from "./lesclass"
export function App(){
    return <div>
        <Entete titre="Gestion des Etudiants"/>
        <GestionEtudiant listE={listetudiants} flr={listfilieres}/>
    </div>
}