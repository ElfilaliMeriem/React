import React from "react";
export class Entete extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <h1>{this.props.titre}</h1>
    }
}