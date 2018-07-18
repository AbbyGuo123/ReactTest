import React, { Component } from 'react';

export default class SumAllNum extends Component{
    constructor(props){
        super(props);
        this.state = {sum: 0};

    }

    render(){
        return (
            <input type="text" value={this.SumAllData}></input>
          );
    }

    addSumAllData =()=> {
        this.setState(prevState => ({
          num:prevState.num+1
        }));
    }
    cutSumAllData =()=> {
        this.setState(prevState => ({
          num:prevState.num+1
        }));
    }

}