import {Filiere} from "./filiere"
import {Groupe} from "./groupe"
import {Titre} from "./titre"
import {Liste} from "./liste"
export function App(){
    return <div className="parent"><Titre/><div className="child"><Filiere/><Groupe/></div><Liste/></div>;
}