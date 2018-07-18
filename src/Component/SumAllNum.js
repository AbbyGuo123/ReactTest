import React, { Component } from 'react';
import Counter from './Counter';

export default class SumAllNum extends Component{
    constructor(props){
        super(props);
        this.state = {sum: 0,size:4,listItems:[]};
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
        let arr=[];
        for(let i=0;i<this.state.size;i++){

        arr.push(<Counter key={i} addSumAllData={this.addSumAllData} cutSumAllData = {this.cutSumAllData}/>) ;
        }
        this.state.listItems=arr
    }

    // listItems = [0,0,0].map((number) =>
    //     <Counter addSumAllData={this.addSumAllData} cutSumAllData = {this.cutSumAllData}/> 
    // );

    changeSize=(event)=>{
        
        this.state.size =event.target.value;
        this.generateListItem()
        console.log(this.state);
        this.setState(this.state);
        console.log(this.state);
    }

    render(){
        return (
            <div>
                <input type='text' value={this.state.size} onChange={this.changeSize.bind(this)}></input>
                {this.state.listItems.map(x=>x)}
                <label>总和：{this.state.sum}</label>
            </div>
          );
    }


}