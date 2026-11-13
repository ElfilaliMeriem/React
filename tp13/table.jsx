import { useState } from "react"

export function TableTache({liste}){
    const [x,setx]=useState("");
    return <div><table border={1}>
        <tr>
            <th>Code Tache</th>
            <th>Date Tache</th>
            <th>Resume</th>
            <th>Action</th>
        </tr>
        {liste.map((x,i)=><tr key={i}>
            <td>{x.Code}</td>
            <td>{x.Date}</td>
            <td>{x.Resumé}</td>
            <td><a href="#" onClick={()=>setx(x)}>Details</a></td>
        </tr>)}
    </table>
    {(x) && 
    <p>Code de cet Tache: {x.Code} , La date de cet Tache: {x.Date} ,La Resumé: {x.Resumé} , Durée: {x.Durée}</p>}
    </div>
}