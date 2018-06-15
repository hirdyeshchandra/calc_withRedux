import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {summingFromAction,sentInputValue,sentInputValue2} from './action';
//import rootReducer from './mainReducer'; 

class App extends Component {
    constructor(){
      super();
      this.state = {
             number1: 0,
             number2: 0,
             sum:0
        
      }
      //this.summing = this.summing.bind(this);
      this.gettingNum1 = this.gettingNum1.bind(this);
      this.gettingNum2 = this.gettingNum2.bind(this);

    };

    gettingNum1(e){
   // this.props.summingFromAction(this.state.number1);
      this.setState({
        number1:e.target.value
      })
     var updatedUsername = this.state.number1
    this.props.sentInputValue(updatedUsername);
    }

    gettingNum2(e){
     
      this.setState({
        number2:e.target.value,
        
      })
      var updatedUsername2 = this.state.number2
      //this.props.summingFromAction(this.state.number2);
      this.props.sentInputValue2(updatedUsername2);
    }

    summing(){
      console.log("hi working---"+rsum);
        var rsum;
        /* var val1 = this.props.number1;
        var val2 = this.props.number2;
        rsum = val1 + val2 ;
        console.log("rsum::"+rsum+"val1::"+val1+"val2::"+val2); */

      rsum = parseInt(this.state.number1) + parseInt(this.state.number2);
       /*  this.setState({
           sum: rsum
        }) */ 
      //  summing();
    //  console.log("helloooo=========")
     // this.props.summingFromAction(this.state.number1);
    /*  var updatedUsername = [];
      updatedUsername.push(this.state.number1);
      updatedUsername.push(this.state.number2); */
    // var  updatedUsername = this.state.number1;
   //  var updatedUsername2 = this.state.number2;
   //  console.log("updatedUsername::"+updatedUsername+"updatedUsername::"+updatedUsername2);
   // this.props.summingFromAction(this.state.number1);
    //this.props.summingFromAction(this.state.number2);
      this.props.summingFromAction(rsum);
      
      this.setState({
        number1: '',
        number2: ''
      })
    }
    subtracting(){
      var rsub;
      rsub = parseInt(this.state.number1) - parseInt(this.state.number2);
      this.props.summingFromAction(rsub);
      
      this.setState({
        number1: '',
        number2: ''
      })
    }
  render() {
    return (
      <div className="App">
           <h1> Num1: {this.props.number1}</h1> <br/>
           <h1> Num2: {this.props.number2}</h1> <br/>
           <h1> sum: {this.props.sum}</h1> <br/>
           
          <p></p>
          Enter Number1 : <input type="text" onChange={this.gettingNum1} value={this.state.number1} /> <br/>
          <p> </p>
          Enter Number2 : <input type="text" onChange={this.gettingNum2}  value={this.state.number2}/> <br/>
              <p></p>
           <textarea name="textarea" value={this.state.sum} />
           <p></p>
           
               <button onClick={this.summing.bind(this)}>Sum</button>
               <button onClick={this.subtracting.bind(this)}>Subtract</button>
          
      </div>
    );
  }
}

//export default App;
function mapStateToProps(state){
    return({
      number1:state.rootReducer.number1,
      number2:state.rootReducer.number2, 
      sum:state.rootReducer.sum
    } )
}

function mapDispatchToProps(dispatch){
  return({    // updatedUsername is a props
    summingFromAction: (updatedUsername)=>{ dispatch(summingFromAction(updatedUsername))},
    sentInputValue: (updatedUsername)=>{ dispatch(sentInputValue(updatedUsername))},
    sentInputValue2:(updatedUsername2)=>{dispatch(sentInputValue2(updatedUsername2))}
                                                                                          // which valuse is this.state.number1
    //summingFromAction: ()=>{ dispatch(summingFromAction())}
    
  })
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
