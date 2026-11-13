import { Info } from "./info";
import { ListDR } from "./list";
import { TableTache } from "./table";
import { Employe,types,projets,Taches} from "./data";
export function App(){
    return <div>
        <Info nom="MHAMDI HASSAN" code="TY678"/>
        <ListDR t="type" list={types}/>
        <ListDR t="Employe" list={Employe}/>
        <ListDR t="projets" list={projets}/>
        <TableTache liste={Taches}/>
        <p>Total des Heures travaillées: {Taches.reduce((s,x)=>s+x.Durée ,0)}</p>
    </div>
}