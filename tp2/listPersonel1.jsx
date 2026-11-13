import {numService,personels} from "./data"
export function ListPersonel1(){
    return <div><h3>Liste des personels de service {numService}</h3>
            <form>
                {personels.filter(x=>x.serviceId==numService).map(x=> <div><input type="checkbox" checked={x.actif}/><label>{x.nom} {x.prenom}</label></div>)}
            </form>
    </div>
}