export function Carte({questions:{id,question,reponse},afficherReponse}){
    return <div className="crt"><p>{question}</p>
    <input type={(afficherReponse)?"checkbox":"hidden"} name="rpns"  checked/>
    <label style={{color:"#09ec64"}}>{(afficherReponse)?reponse:""}</label>
    
    </div>
}