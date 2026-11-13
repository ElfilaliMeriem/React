import React from "react";
export class Info extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div>
            <h2>{this.props.nom}</h2>
            <h3>{this.props.code}</h3>
        </div>
    }
}