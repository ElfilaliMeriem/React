import React from "react";
export class App extends React.Component{
    constructor(){
        super()
        this.state={ctr:0}
    }
    incrementer(){
        this.setState({ctr:this.state.ctr+1});
    }
    decrementer(){
        this.setState({ctr:this.state.ctr-1});
    }
    render(){
        return (<div>
            <h2>Compteur: {this.state.ctr}</h2>
            <button onClick={()=>this.incrementer()}>incrementer</button>
            <button onClick={()=>this.setState({ctr:this.state.ctr-1})}>decrementer</button>
        </div>)
    }
}