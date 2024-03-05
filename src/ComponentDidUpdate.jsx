import React from "react";

export default class ComponentDidUpdate extends React.Component{
    state = JSON.parse(localStorage.getItem("formData")) || {
        firstname : "",
        lastname: ""
    }

    handleChange = (event)=>{
        if(event.target.name === "firstname"){
            this.setState(({firstname:event.target.value}))
        }else{
            this.setState(({lastname:event.target.value}))
        }
    }

    componentDidMount(){
        console.log("Mount");
        // this.setState(JSON.parse(localStorage.getItem("formData")))
        
    }

    componentDidUpdate(){
        console.log("update");
        localStorage.setItem("formData", JSON.stringify(this.state))
    }

    render(){
        console.log("render");
        return(
            <form>
                <input type="text" placeholder="first name" name="firstname" onChange={this.handleChange} value={this.state.firstname} />
                <br />
                <input type="text" placeholder="last name" name="lastname" onChange={this.handleChange} value={this.state.lastname} />

            </form>
        )
    }
}