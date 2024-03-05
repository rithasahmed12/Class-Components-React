import React from "react";

export default class MyComponent extends React.Component{
    state = {
        character:{}
    }

    componentDidMount(){
       
        console.log("COMPONENT DID MOUNT");
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => {
                this.setState({character:data})
            })
            }

    render(){
        console.log("render");
        return(
            <h1>{this.state.character.name}</h1>
        )
    }
}