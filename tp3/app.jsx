import {t1,t2,t3,t4,t5,t6,l1,l2,lo1} from "./data"
import {Header} from "./header"
import { MenuX } from "./menux"
import { TableX } from "./tablex"
export function App(){
    return <div className="app"><div className="h1"><Header text={t1}/></div><MenuX text={t3} list={l1}/><TableX text={t5} list={lo1}/><TableX text={t6} list={lo1}/><MenuX text={t4} list={l2}/><div className="h2"><Header text={t2}/></div></div>
}