import { useState } from "react";
let X ={n:"",g:"",nt:0};
export function FormX(){
    const [n,setn]=useState("");
    const [g,setg]=useState("");
    const [nt,setnt]=useState(0);
    function nom(e){X.n=e.target.value;}
    function genre(e){X.g=e.target.value;}
    function note(e){X.nt=e.target.value;}
    function valide(e){
        e.preventDefault();
        setn(X.n);
        setg(X.g);
        setnt(X.nt);
    }
    return <div><form onSubmit={valide}>
        Nom: <input type="text" onChange={nom} /><br/><br/>
        genre: <input type="radio" name="genre" value="Mascilin" onChange={genre}/>M
        <input type="radio" name="genre" value="Fiminin" onChange={genre}/>F<br/><br/>
        Note: <input type="number" onChange={note} /><br/><br/>
        <input type="submit" value='Valider'/>
    </form>
    <h2>Information:</h2>
    <p>Nom: {n}</p>
    <p>{g}</p>
    <p>Resulat: {(nt>10)?"Admin" :"Redoublent"}</p>
    </div>
}