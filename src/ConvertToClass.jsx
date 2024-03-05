import React from "react";

class Header extends React.Component{
  render(){
    return(
      <header>
        <p>Welcome, {this.props.username} !</p>
      </header>
    )
  }
}

class Greeting extends React.Component{
  
  render(){
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if(hours <12){
      timeOfDay = "morning"
    }else if(hours >= 12 && hours < 17){
      timeOfDay="afternoon"
    }else{
      timeOfDay = "night"
    }

    return(
      <h1>Good {timeOfDay} to you sir !</h1>
    )

  }
}


class ConvertToClass extends React.Component{
    render(){
        return(
            <div>
                <Header username="Rithas" />
                <Greeting />
            </div>
        )
    }
}

export default ConvertToClass
