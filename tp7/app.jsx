import { useState } from "react"
import {Header} from "./Header"
import {categories,articles} from "./data"
import {Titre} from "./titre"
export function App(){
    const [listPr,setlestPr] = useState(articles);
    const [listPn,setlestPn] = useState([]);
    const [c,setc] = useState("");
    function f(e){
        setc(e.target.value);
    }
    return <div>
        <Header/>
        <Titre titre="Recherche par catégorie"/>
        <select onChange={f}>
            {categories.map(x=><option>{x}</option>)}
        </select><br/><br/>
        <table border="1">
            <tr>
                <th>Code</th>
                <th>Designation</th>
                <th>Prix</th>
                <th></th>
            </tr>
            {listPr.filter(x=>x.Catégorie.includes(c)).map(x=><tr>
                <td>{x.Code}</td>
                <td>{x.Designation}</td>
                <td>{x.Prix}</td>
                <td><input type="button" value="Ajouter au panier" 
                    onClick={()=>
                    {setlestPn([...listPn,{Code: x.Code,Designation: x.Designation,Prix: x.Prix,Catégorie: x.Catégorie}]);
                    setlestPr(listPr.filter(y=>y.Code!=x.Code))}
                    }/></td>
            </tr>)}
        </table>
        <Titre titre="Mon Panier"/>
        <table border="1">
            <tr>
                <th>Code</th>
                <th>Designation</th>
                <th>Prix</th>
                <th></th>
            </tr>
            {listPn.map(x=><tr>
                <td>{x.Code}</td>
                <td>{x.Designation}</td>
                <td>{x.Prix}</td>
                <td><input type="button" value="Sopprimer" 
                    onClick={()=>
                    {setlestPr([...listPr,{Code: x.Code,Designation: x.Designation,Prix: x.Prix,Catégorie: x.Catégorie}]);
                    setlestPn(listPn.filter(y=>y.Code!=x.Code))}
                    }/></td>
            </tr>)}
        </table>
    </div>
}