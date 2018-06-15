
import actionTypes from './actionTypes';

const INTIAL_STATE ={
    number1:10,
    number2: 10,
    sum: 10
}

export default (states=INTIAL_STATE,action)=>{
    switch(action.type){
           //case 'ADD_NUM':
           case actionTypes.ADD_NUM:
              return ({
                 ... states,
                // number1: action.payload1,
                 //number2: action.payload1,
                  sum: action.payload
                  
              })
          case actionTypes.SUB_NUM:
               return({
                sum: action.payload
               })
          case actionTypes.SENT_INP:
                 return({
                    number1: action.payload,  
                      
                 })
          case actionTypes.SENT_INP2:
                 return({
                
                    number2: action.payload 
                 })

           default:
            return states;
    }
}