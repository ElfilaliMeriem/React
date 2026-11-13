export function MenuX({text,list}){
    return <div><h3>{text}</h3>
    <ul>
        {list.map(x=><li>{x}</li>)}
    </ul>
    </div>
}