import {numService,personels} from "./data"
export function ListPersonel2(){
    return <div><h3>Liste des personels des auter service </h3>
            <form>
                {personels.filter(x=>x.serviceId!=numService).map(x=> <div><input type="checkbox" checked={x.actif}/><label>{x.nom} {x.prenom}</label></div>)}
            </form>
    </div>
}