import React from "react";
export class ListDR extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div>
            <label>{this.props.t}</label>
            <select>
                {this.props.list.map((x,i)=><option key={i} value={x}>{x}</option>)}
            </select>
        </div>
    }
}