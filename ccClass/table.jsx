import React from "react";
export class TableTache extends React.Component{
    constructor(props){
        super(props);
        this.state={T:""}
    }
    render(){
        return <div><table border={1}>
        <tr>
            <th>Code Tache</th>
            <th>Date Tache</th>
            <th>Resume</th>
            <th>Action</th>
        </tr>
        {this.props.liste.map((x,i)=><tr key={i}>
            <td>{x.Code}</td>
            <td>{x.Date}</td>
            <td>{x.Resumé}</td>
            <td><a href="#" onClick={()=>this.setState({T:x})}>Details</a></td>
        </tr>)}
    </table>
    {(this.state.T) && 
    <p>Code de cet Tache: {this.state.T.Code} , La date de cet Tache: {this.state.T.Date} ,La Resumé: {this.state.T.Resumé} , Durée: {this.state.T.Durée}</p>}
    </div>
    }
}