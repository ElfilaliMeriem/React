export function TableX({text,list}){
    return <div><h3>{text}</h3><fieldset><table border="1">
        <tr><th>Id</th><th>Nom</th><th>Prix</th></tr>
        {list.map(x=><tr><td>{x.id}</td><td>{x.nom}</td><td>{x.prix}</td></tr>)}
        </table>
        <p>Total : {list.reduce((s,x)=>s+x.prix,0)}</p>
        </fieldset></div>
}