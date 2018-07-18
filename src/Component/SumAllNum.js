import React, { Component } from 'react';
import Counter from './Counter';

export default class SumAllNum extends Component{
    constructor(props){
        super(props);
        this.state = {sum: 0,size:4};
        this.listItems = [];
    }

    addSumAllData =()=> {
        this.setState(prevState => ({
          sum:prevState.sum+1
        }));
    }
    cutSumAllData =()=> {
        this.setState(prevState => ({
            sum:prevState.sum-1
        }));
    }

    generateListItem =()=>{
        for(let i=0;i<this.state.size;i++){
        this.listItems.push(<Counter addSumAllData={this.addSumAllData} cutSumAllData = {this.cutSumAllData}/>) ;
        }
    }

    // listItems = [0,0,0].map((number) =>
    //     <Counter addSumAllData={this.addSumAllData} cutSumAllData = {this.cutSumAllData}/> 
    // );

    chageSize=(event)=>{
        this.state.size =event.target.value;
        console.log(this.state.size);
    }

    render(){
        {this.generateListItem()}
        return (
            <div>
                <input type='text'  onChange={this.chageSize}></input>
                {this.listItems}
                <label>总和：{this.state.sum}</label>
            </div>
          );
    }


}