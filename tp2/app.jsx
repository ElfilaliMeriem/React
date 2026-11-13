import {ListService} from "./listService"
import {InfoService} from "./infoService"
import { ListPersonel1 } from "./listPersonel1"
import { ListPersonel2 } from "./listPersonel2"

export function App(){
    return <div className="app"><ListService/><InfoService/><ListPersonel1/><ListPersonel2/></div>
}