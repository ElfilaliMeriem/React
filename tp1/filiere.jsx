export function Filiere(){
    let listF = ["DEVOWFS","DD","DEV","ID"];
    return <div className="filiere"><span>Filiere</span> <select>{listF.map(x=><option>{x}</option>)}</select> </div>;
}