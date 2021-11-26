import React, { Component } from "react";

class Clock extends Component{
    state = {
        date: new Date(),
    }

    componentDidMount(){
        setInterval(() => this.setState({date:new Date()}), 1000);
    }

    // componentWillUnmount(){
    //     clearInterval(this.timerID);
    // }

    render() {
        return <div>Il est : {this.state.date.toLocaleTimeString()} </div>
    }
}

export default Clock