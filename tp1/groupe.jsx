export function Groupe(){
    let listG = ["201","202","203","204","205"];
    return <div className="groupe"><span>Groupe</span> <select>{listG.map(x=><option>{x}</option>)}</select> </div>;
}