
import actionTypes from './actionTypes';

export function summingFromAction(updatedUsername){
    return dispatch =>{
       //dispatch({type:'ADD_NUM',payload:updatedUsername})
    //console.log("i'm in action");
   // dispatch({type:'ADD_NUM',payload:"hirdyesh"})
   dispatch({type:actionTypes.ADD_NUM,payload:updatedUsername})
    }
}

export function sentInputValue(updatedUsername){
    return dispatch =>{
   dispatch({type:actionTypes.SENT_INP,payload:updatedUsername})
    }
}

export function sentInputValue2(updatedUsername2){
    return dispatch =>{
   dispatch({type:actionTypes.SENT_INP2,payload:updatedUsername2})
    }
}