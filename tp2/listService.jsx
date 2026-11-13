import { service } from "./data";
export function ListService(){
    return <div><span>Service </span><select>{service.map(x=><option>{x.titre}</option>)}</select></div>
}