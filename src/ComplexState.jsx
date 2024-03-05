import React from "react";

export default class ComplexState extends React.Component{
    constructor(){
        super()
        this.state = {
            
                firstName:"John",
                lastName:"Doe",
                isFavorite: false
            
        }

        this.toggleFavorite = this.toggleFavorite.bind(this)
    }

  

    toggleFavorite(){
        this.setState(prevState =>
         ({
            isFavorite:!prevState.isFavorite
        }))
    }
    

   
    render(){

        const favorite = this.state.isFavorite ? "Favorite" : "Not Favorite";

        return(
            <div>
                <h1>{this.state.firstName}</h1>
                <h1>{this.state.lastName}</h1>
                <h1 onClick={this.toggleFavorite}>{favorite}</h1>
            </div>
        )
    }
}