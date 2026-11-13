export function ListDR({titre,elements}){
    return <div>
        <label>{titre} : </label>
        <select>
            {elements.map((x,i)=><option value={x} key={i}>{x}</option>)}
        </select>
    </div>
}