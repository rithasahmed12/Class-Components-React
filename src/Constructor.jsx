import React from "react";

export default class Constructor extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }

        this.add = this.add.bind(this);
        this.substract= this.substract.bind(this);
    }

    add(){
        this.setState(c => ({count:c.count+1}))
    }

    substract(){
        this.setState(c => ({count:c.count-1}))
    }
}


