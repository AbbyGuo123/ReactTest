import React, { Component } from 'react';

export default class Counter extends Component{
    constructor(props){
        super(props);
        this.addSumAllData =  props.addSumAllData
        this.cutSumAllData =  props.cutSumAllData
        this.state = {num:0};

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
        )
    }

    addData =()=> {
        this.setState(prevState => ({
          num:prevState.num+1
         
          
    }));
    this.addSumAllData()
    }
    
    cutData = ()=> {
        this.setState(prevState => ({
          num: prevState.num-1
        }));
    this.cutSumAllData();
    }
}