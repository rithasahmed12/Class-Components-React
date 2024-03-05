import React from "react";

export default class Counter extends React.Component{

    state = {
        count: 0
    }

    increment = () => {
        this.setState(C =>{
           return{count: C.count +1}
        })
    }

    decrement = () => {
        this.setState(C =>{
            return{count: C.count-1}
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}

