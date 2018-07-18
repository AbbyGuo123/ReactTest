import React, { Component } from 'react';

export default class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {num: 1};

    }

    render(){
        return (
              <div>
              <button onClick={this.addData}>
              ADD
              </button>
              &nbsp;{this.state.num}&nbsp;
              <button onClick={this.cutData}>
              CUT
              </button>
          </div>    
          );
    }

    addData =()=> {
        this.setState(prevState => ({
            num:prevState.num+1
        }));
    }
    
    cutData = ()=> {
        this.setState(prevState => ({
          num: prevState.num-1
        }));
    }
}