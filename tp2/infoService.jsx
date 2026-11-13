import {service,personels,numService} from "./data"
export function InfoService(){
    const s = service.find(x=>x.numero==numService);
    const nbm = personels.filter(x=>x.serviceId==numService).length;
    return <fieldset>
        <legend>Information Service</legend>
        <p>Numero : {numService}</p>
        <p>Titre : {s.titre}</p>
        <p>Descrition : {s.Description}</p>
        <p>Nombre de personels : {nbm}</p>
    </fieldset>
}