import { Info } from "./info";
import { ListDR } from "./liste";
import { TableTache } from "./table";
import { Employe,types,projets,Taches} from "./data";
export function App(){
    return <div>
        <Info nom="MHAMDI HASSAN" code="TY678"/>
        <ListDR titre="type" elements={types}/>
        <ListDR titre="Employe" elements={Employe}/>
        <ListDR titre="projets" elements={projets}/>
        <TableTache liste={Taches}/>
        <p>Total des Heures travaillées: {Taches.reduce((s,x)=>s+x.Durée ,0)}</p>
    </div>
}