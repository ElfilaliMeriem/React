import {quests} from "./data"
import {Entete} from "./entete"
import {Question} from "./qst"
export function App(){
    return <div>
        <Entete titre="Quiz de Mathematiques"/>
        {quests.map(x=><Question questions={x}/>)}
    </div>
}