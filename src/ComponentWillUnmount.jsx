import React from "react";

export default class ComponentWillUnmount extends React.Component{
    state = {
        windowWidth: window.innerWidth
    }

    watchWidth = () => {
        this.setState({windowWidth:window.innerWidth});
    }

    componentDidMount(){
        window.addEventListener("resize",this.watchWidth);
    }

    componentWillUnmount(){
        window.removeEventListener("resize",this.watchWidth);
    }


    render(){
        return(
            <h1>Window Width: {this.state.windowWidth}</h1>
        )
    }
}

