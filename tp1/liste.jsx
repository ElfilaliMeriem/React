export function Liste(){
    let t=[
        {nom:"Elfilali", prenom:"ayoub",note:20},
        {nom:"Bakadir", prenom:"Abdelhaq",note:16},
        {nom:"Elfilali", prenom:"Meriem",note:15},
        {nom:"ElAoula", prenom:"Hajar",note:14},
        {nom:"Amlal", prenom:"Fatima-Zahrae",note:14},
    ];
    let tab=<table border="1"><tr><th>Nom</th><th>Prenom</th><th>Note</th></tr>
                    {t.map(x=><tr><td>{x.nom}</td><td>{x.prenom}</td><td>{x.note}</td></tr>)}
            </table>;
    let moy = <span>moyenne: {t.reduce((s,x)=>s+x.note,0)/t.length}</span>;
    return <div className="tab">{tab} {moy}</div>;
}