import React from "react"
export class Compteur extends React.Component{
    constructor(){
        super();
        this.state={c:0};
    }
    add(){
        this.setState({c:this.state.c+1});
    }
    xxx(){
        this.setState({c:this.state.c-1});
    }
    render(){
        return <div>
            <h2>Compteur:{this.state.c}</h2>
            <button onClick={()=>this.add()}>Add</button>
            <button onClick={()=>this.xxx()}>-</button>
        </div>
    }
}