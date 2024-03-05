import React from "react";

class State extends React.Component{

    constructor(){
        super()
            this.state ={
                goOut:"Yes"
            }
            this.toggleGoOut = this.toggleGoOut.bind(this)
        }
    

    toggleGoOut(){
        this.setState(prevState => {
            return {
                goOut: prevState.goOut === "Yes" ? "No" : "Yes"
            }
        })
    }

    render(){
        return(
            <div className="state">
                <h1 className="state-title">Should i go out tonight?</h1>
                <div className="state-value" onClick={this.toggleGoOut}>
                    <h1>{this.state.goOut}</h1>
                </div>
            </div>
        )
    }
}

export default State