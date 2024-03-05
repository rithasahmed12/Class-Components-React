import React from "react";

export default class ComponentDidUpdate2 extends React.Component {
    state = {
        name:"",
        count:1
    }

    add = ()=>{
        this.setState(prevState => ({count:prevState.count+1}))
    }   

    substract = ()=>{
        this.setState(prevState => ({count:prevState.count-1}))
    }

    getName =(id)=>{
        fetch(`https://swapi.dev/api/people/${id}`)
            .then(res => res.json())
            .then(data=> this.setState({name:data.name}))
    }
        

    componentDidMount(){
        console.log("mount");
        this.getName(this.state.count);
    }

    componentDidUpdate(prevProps, prevState){
        console.log("update");
        if(prevState.count !== this.state.count){
            this.getName(this.state.count);
        }
        
    }

    render() {
        console.log("render");
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.add}>+</button>
                <button onClick={this.substract}>-</button>
                <h2>{this.state.name || "Loading..."}</h2>
            </div>

        )
    }
}